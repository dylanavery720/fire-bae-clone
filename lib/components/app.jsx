import React from 'react';

import Item from '../Item';

import Button from './Button';
import ItemMainContent from './ItemMainContent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showForm: false,
      items: [],
    };
    this.updateUser = this.updateUser.bind(this);
    this.showFormToggle = this.showFormToggle.bind(this);
    this.handleSubmitNewForm = this.handleSubmitNewForm.bind(this);
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

  updateUser(user) {
    if (user) {
      this.setState({ user });
      this.props.firebase.getItems(user, (items) => this.setState({ items }));
    } else {
      this.setState({ user: null });
      this.setState({ items: [] });
    }
  }

  signIn() {
    this.props.firebase.signIn();
  }

  signOut() {
    this.props.firebase.signOut();
  }

  createItem(currentUser, itemPayload) {
    const item = new Item(currentUser, itemPayload);
    this.props.firebase.createItem(currentUser, item);
    const itemStorage = this.state.items.slice();
    itemStorage.push(item);
    this.setState({ items: itemStorage });
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
