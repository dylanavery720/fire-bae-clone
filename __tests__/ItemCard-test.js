/* eslint no-undef:0 comma-dangle:0*/

import React from 'react'; // eslint-disable-line no-unused-vars

import { mount } from 'enzyme';
import ItemCard from '../lib/components/ItemCard';

describe('ItemCard', () => {
  it('mounts without props', () => {
    mount(<ItemCard />);
  });
});
