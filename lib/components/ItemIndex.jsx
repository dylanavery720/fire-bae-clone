import React from 'react'; // eslint-disable-line no-unused-vars

import ItemStatusSection from './ItemStatusSection';

import { itemStorageStructure } from '../utils';

export default function (props = {}) {
  const { items = itemStorageStructure() } = props;
  return (
    <div>
      {items.due && items.due.length > 0 &&
        <ItemStatusSection items={items.due} header='Due' />
      }
      {items.past && items.past.length > 0 &&
        <ItemStatusSection items={items.past} header='Past Due' />
      }
      {items.upcoming && items.upcoming.length > 0 &&
        <ItemStatusSection items={items.upcoming} header='Upcoming' />
      }
    </div>
  );
}
