/* eslint no-undef:0 comma-dangle:0*/

import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow, render, mount } from 'enzyme';
import App from '../lib/components/app';
import Button from '../lib/components/Button';
import AddNewOrderItem from '../lib/components/AddNewOrderItem';

it('renders with a title', () => {
  const app = shallow(
    <App title="New Title"/>
  );

  expect(app.contains('New Title')).toEqual(true);
});

it('gives you a signIn prompt when not logged in', () => {
  const app = render(
    <App />
  );

  expect(app.text()).toContain('Sign In');
});

xit('gives you a signOut prompt when logged in', () => {
  const app = shallow(
    <App />
  );

  app.setState({ user: [] });

  expect(app.find(Button).text()).toEqual({});
});

it('toggles the new item form', () => {
  const app = mount(
    <App />
  );

  const showButton = app.find('.item__show-new-form');

  expect(showButton.length).toEqual(1);

  showButton.simulate('click');

  expect(app.find(AddNewOrderItem).length).toEqual(1);
});