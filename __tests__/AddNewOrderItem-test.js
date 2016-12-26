/* eslint no-undef:0 comma-dangle:0*/

import React from 'react'; // eslint-disable-line no-unused-vars

import { mount } from 'enzyme';
import AddNewOrderItem from '../lib/components/AddNewOrderItem';

describe('AddNewOrderItem', () => {
  let expectedDefaultItemData;

  beforeEach(() => {
    expectedDefaultItemData = { freqNum: 1, freqQual: 'month', iName: '' };
  });

  it('mounts without props', () => {
    mount(<AddNewOrderItem/>);
  });

  it('calls handleSubmit function on submit', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<AddNewOrderItem handleClick={handleClick}/>);
    const b = wrapper.find('.item__create-submit');
    b.simulate('click');
    expect(handleClick).toBeCalled();
  });

  it('passes default data to the handleSubmit function on submit', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<AddNewOrderItem handleClick={handleClick}/>);
    const b = wrapper.find('.item__create-submit');
    b.simulate('click');
    expect(handleClick).toBeCalledWith(expectedDefaultItemData);
  });

  it('passes the correct data to the handleSubmit function on submit', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<AddNewOrderItem handleClick={handleClick}/>);
    const b = wrapper.find('.item__create-submit');
    wrapper.ref('iName').simulate('change', { target: { name: 'iName', value: 'Toilet Paper' } });
    wrapper.ref('freqNum').simulate('change', { target: { name: 'freqNum', value: 3 } });
    wrapper.ref('freqQual').simulate('change', { target: { name: 'freqQual', value: 'eon' } });
    b.simulate('click');
    expectedDefaultItemData.iName = 'Toilet Paper';
    expectedDefaultItemData.freqNum = 3;
    expectedDefaultItemData.freqQual = 'eon';
    expect(handleClick).toBeCalledWith(expectedDefaultItemData);
  });
});
