require('./styles.scss');

const React = require('react');
const ReactDOM = require('react-dom');
import App from './app';

ReactDOM.render(<App title="Personal Order"/>, document.querySelector('.content'));