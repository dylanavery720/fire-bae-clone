import React from 'react'; // eslint-disable-line no-unused-vars

import ItemCard from './ItemCard';

export default function (props = {}) {
  const { items = [], header } = props;
  return (
    <div>
      <h2>{header}</h2>
      { items.map((item) => <ItemCard item={item} key={item.id} />) }
    </div>
  );
}