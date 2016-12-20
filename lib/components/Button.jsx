import React from 'react'; // eslint-disable-line no-unused-vars

export default (props) => (
  <button onClick={props.handleClick} className={props.className}>{props.text}</button>
);