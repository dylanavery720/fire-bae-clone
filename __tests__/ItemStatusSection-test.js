/* eslint no-undef:0 comma-dangle:0*/

import React from 'react'; // eslint-disable-line no-unused-vars

import { mount } from 'enzyme';
import ItemStatusSection from '../lib/components/ItemStatusSection';

describe('ItemStatusSection', () => {
  it('mounts without props', () => {
    mount(<ItemStatusSection />);
  });
});
