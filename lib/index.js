import React from 'react';  // eslint-disable-line no-unused-vars
import { render } from 'react-dom';

import FirebaseTalker from './firebase';
import App from './components/app';

import './styles.scss';
import 'react-dates/lib/css/_datepicker.css'; // eslint-disable-line import/first

const firebase = new FirebaseTalker();

render(<App title="Personal Order" firebase={firebase}/>, document.querySelector('.content'));
