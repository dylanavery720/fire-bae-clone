import './styles.scss';

import React from 'react';
import { render } from 'react-dom';

import firebaseTalker from './firebase';

import App from './components/app';

const firebase = new firebaseTalker();

render(<App title="Personal Order" firebase={firebase}/>, document.querySelector('.content'));