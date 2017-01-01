/* eslint no-undef:0 comma-dangle:0*/

import React from 'react'; // eslint-disable-line no-unused-vars
import { shallow, render, mount } from 'enzyme';
import App from '../lib/components/app';
import AddNewOrderItem from '../lib/components/AddNewOrderItem';

describe('App', () => {
  it('renders with a title', () => {
    const app = shallow(
      <App title="New Title"/>
    );

    expect(app.contains('New Title')).toEqual(true);
  });

  context('when logged out', () => {
    it('gives you a signIn prompt', () => {
      const app = render(
        <App />
      );

      expect(app.text()).toContain('Sign In');
    });

    it('does not allow you to create new items', () => {
      const app = shallow(
        <App />
      );

      expect(app.find('.item__show-new-form').length).toEqual(0);
    });
  });

  context('when logged in', () => {
    it('gives you a signOut prompt when logged in', () => {
      const app = mount(
        <App />
      );

      app.setState({ user: {} });

      expect(app.find('.auth-toggle-button').text()).toEqual('Sign Out');
    });

    it('toggles the new item form', () => {
      const app = mount(
        <App />
      );

      app.setState({ user: {} });

      const showButton = app.find('.item__show-new-form');

      expect(showButton.length).toEqual(1);

      showButton.simulate('click');

      expect(app.find(AddNewOrderItem).length).toEqual(1);
    });

    it('creates an item with the correct fields', () => {
      const firebase = {
        createItem: jest.fn(),
        onAuthStateChanged: jest.fn(),
        auth: { currentUser: {} } };
      const expectedItemKeys = ['user', 'iName', 'freqNum', 'freqQual', 'timestamp', 'prettyDate'];

      const app = mount(
        <App firebase={firebase} />
      );
      app.setState({ user: {} });

      const showButton = app.find('.item__show-new-form');
      showButton.simulate('click');
      const b = app.find('.item__create-submit');
      b.simulate('click');

      const passedItem = firebase.createItem.mock.calls[0][1];

      expect(Object.keys(passedItem)).toEqual(expectedItemKeys);
    });
  });
});
