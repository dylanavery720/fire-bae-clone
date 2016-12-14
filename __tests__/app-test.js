import React from 'react';
import {shallow} from 'enzyme';
import App from '../lib/components/app';

it('renders with a title', () => {
  const app = shallow(
    <App title="New Title"/>
  );

  expect(app.contains('New Title')).toEqual(true);
});

it('gives you a signIn prompt when not logged in', () => {
  const app = shallow(
    <App />
  );

  expect(app.contains('Sign In')).toEqual(true);
});

it('gives you a signOut prompt when logged in', () => {
  const app = shallow(
    <App />
  );

  app.setState({user: []});
  
  expect(app.contains('Sign Out')).toEqual(true);
});