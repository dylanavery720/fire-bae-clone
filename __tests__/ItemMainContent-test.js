/* eslint no-undef:0 comma-dangle:0*/

import React from 'react'; // eslint-disable-line no-unused-vars

import { mount } from 'enzyme';
import ItemMainContent from '../lib/components/ItemMainContent';

describe('ItemMainContent', () => {
  it('mounts without props', () => {
    mount(<ItemMainContent />);
  });
});