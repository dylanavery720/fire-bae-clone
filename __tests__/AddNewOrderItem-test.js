/* eslint no-undef:0 comma-dangle:0*/

import React from 'react'; // eslint-disable-line no-unused-vars

import { mount } from 'enzyme';
import AddNewOrderItem from '../lib/components/AddNewOrderItem';

describe('AddNewOrderItem', () => {
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

  it('passes the correct data to the handleSubmit function on submit', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<AddNewOrderItem handleClick={handleClick}/>);
    const b = wrapper.find('.item__create-submit');
    wrapper.ref('name').simulate('change', { target: { value: 'Toilet Paper' } });
    b.simulate('click');
    expect(handleClick).toBeCalledWith({ name: 'Toilet Paper' });
  });
});