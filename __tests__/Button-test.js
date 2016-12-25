/* eslint no-undef:0 comma-dangle:0*/

import React from 'react'; // eslint-disable-line no-unused-vars

import { mount, shallow } from 'enzyme';
import Button from '../lib/components/Button';

describe('Button', () => {
  it('mounts without props', () => {
    mount(<Button />);
  });

  it('sets a default className', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.hasClass('button')).toEqual(true);
  });

  it('accepts passed in classNames', () => {
    const wrapper = shallow(<Button className="purple" />);
    expect(wrapper.hasClass('button')).toEqual(true);
    expect(wrapper.hasClass('purple')).toEqual(true);
  });
});