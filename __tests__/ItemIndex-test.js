/* eslint no-undef:0 comma-dangle:0*/

import React from 'react'; // eslint-disable-line no-unused-vars

import { mount } from 'enzyme';
import ItemIndex from '../lib/components/ItemIndex';

describe('ItemIndex', () => {
  it('mounts without props', () => {
    mount(<ItemIndex/>);
  });
});