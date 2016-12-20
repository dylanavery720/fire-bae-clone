import React from 'react'; // eslint-disable-line no-unused-vars

export default function (props = {}) {
  const { items = [] } = props;
  return (
    <div>
      { items.map((item) => <p> { item.name } </p>) }
    </div>
  );
}