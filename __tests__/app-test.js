import React from 'react';
import {shallow} from 'enzyme';
import App from '../lib/components/app';

it('renders with a title', () => {
  const app = shallow(
    <App title="New Title"/>
  );

  expect(app.contains('New Title')).toEqual(true);
});