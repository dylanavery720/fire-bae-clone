import React from 'react'; // eslint-disable-line no-unused-vars

import ItemCard from './ItemCard';

export default function (props = {}) {
  const { items = [] } = props;
  return (
    <div>
      { items.map((item) => <ItemCard item={item} />) }
    </div>
  );
}
