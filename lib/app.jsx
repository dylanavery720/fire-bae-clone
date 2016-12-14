const React = require('react');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="personal-order">
        <header>
          <h1>{ this.props.title }</h1>
        </header>
        <section className="main-content">
        </section>
      </div>
    );
  }
}