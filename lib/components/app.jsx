import React from 'react';

import Button from './Button';
import AddNewOrderItem from './AddNewOrderItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showForm: false,
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

  handleSubmitNewForm() {
    this.showFormToggle();
  }

  showFormToggle() {
    this.setState({ showForm: !this.state.showForm });
  }

  updateUser(user) {
    this.setState({ user });
  }

  signIn() {
    this.props.firebase.signIn();
  }

  signOut() {
    this.props.firebase.signOut();
  }

  render() {
    const { user, showForm } = this.state;
    return (
      <div className="personal-order">
        { user ? <Button handleClick={this.signOut} text="Sign Out" />
        : <Button handleClick={this.signIn} text="Sign In" /> }
        <header>
          <h1>{ this.props.title }</h1>
        </header>
        <section className="main-content">
          { showForm ? <AddNewOrderItem handleClick={this.handleSubmitNewForm}/> : <Button handleClick={this.showFormToggle} className='item__show-new-form' text="Add Item" /> }
        </section>
      </div>
    );
  }
}