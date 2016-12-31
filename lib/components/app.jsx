import React from 'react';

import ItemStore from '../ItemStore';

import Button from './Button';
import ItemMainContent from './ItemMainContent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showForm: false,
      items: [],
      ItemStore: new ItemStore(),
    };
    this.updateUser = this.updateUser.bind(this);
    this.showFormToggle = this.showFormToggle.bind(this);
    this.handleSubmitNewForm = this.handleSubmitNewForm.bind(this);
    this.formatItemsPayload = this.formatItemsPayload.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    if (this.props.firebase) {
      this.props.firebase.onAuthStateChanged(this.updateUser);
    }
  }

  handleSubmitNewForm(itemPayload) {
    this.showFormToggle();
    const currentUser = this.props.firebase.auth.currentUser;
    if (currentUser) { this.createItem(currentUser, itemPayload); }
  }

  showFormToggle() {
    this.setState({ showForm: !this.state.showForm });
  }

  formatItemsPayload(itemsPayload) {
    const store = new ItemStore(itemsPayload);
    this.setState({ ItemStore: store });
    this.setState({ items: store.items });
  }

  createItem(currentUser, itemPayload) {
    const store = this.state.ItemStore;
    const item = store.create(itemPayload, currentUser);
    this.props.firebase.createItem(currentUser, item.sanitizedForDB());
    this.setState({ items: store.items });
  }

  updateUser(user) {
    if (user) {
      this.setState({ user });
      this.props.firebase.getItems(user, this.formatItemsPayload);
    } else {
      this.setState({ user: null });
      this.setState({ ItemStore: new ItemStore() });
      this.setState({ items: [] });
    }
  }

  signIn() {
    this.props.firebase.signIn();
  }

  signOut() {
    this.props.firebase.signOut();
  }

  render() {
    const { user } = this.state;
    return (
      <div className="personal-order">
        { user ? <Button handleClick={this.signOut} className="auth-toggle-button" text="Sign Out" />
        : <Button handleClick={this.signIn} className="auth-toggle-button" text="Sign In" /> }
        <header>
          <h1>{ this.props.title }</h1>
        </header>
        { user ?
        <ItemMainContent showForm={ this.state.showForm }
                         items={ this.state.items }
                         handleSubmitNewForm={ this.handleSubmitNewForm }
                         showFormToggle={ this.showFormToggle } />
        : <div></div> }
      </div>
    );
  }
}
