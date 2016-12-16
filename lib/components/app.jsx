import React from 'react';

import Button from './Button';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.updateUser = this.updateUser.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.props.firebase.onAuthStateChanged(this.updateUser);
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
    const { user } = this.state;
    return (
      <div className="personal-order">
        { user ? <Button handleClick={this.signOut} text="Sign Out" />
        : <Button handleClick={this.signIn} text="Sign In" /> }
        <header>
          <h1>{ this.props.title }</h1>
        </header>
        <section className="main-content">
        </section>
      </div>
    );
  }
}