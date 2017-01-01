import React from 'react'; // eslint-disable-line no-unused-vars

import ItemCard from './ItemCard';

import { itemStorageStructure } from '../utils';

export default function (props = {}) {
  const { items = itemStorageStructure() } = props;
  return (
    <div>
      <div>
        <h2>Due</h2>
        { items.due.map((item) => <ItemCard item={item} key={item.id} />) }
      </div>
      <div>
        <h2>Past Due</h2>
        { items.past.map((item) => <ItemCard item={item} key={item.id} />) }
      </div>
      <div>
        <h2>Upcoming</h2>
        { items.upcoming.map((item) => <ItemCard item={item} key={item.id} />) }
      </div>
    </div>
  );
}
