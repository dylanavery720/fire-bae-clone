import Item from './Item';
import { itemStorageStructure } from './utils';

function pushCorrectDueStatus(structure, item) {
  if (item.uTD === 0) {
    structure.due.push(item);
  } else if (item.uTD > 0) {
    structure.upcoming.push(item);
  } else {
    structure.past.push(item);
  }
}

export default class ItemStore {
  constructor(itemPayload) {
    this.items = this.populate(itemPayload);
  }

  makeNew(itemPayload, user) {  // eslint-disable-line class-methods-use-this
    return new Item(itemPayload, user);
  }

  create(itemPayload, user) {
    const item = this.makeNew(itemPayload, user);
    pushCorrectDueStatus(this.items, item);
    return item;
  }

  populate(itemPayload) { // eslint-disable-line class-methods-use-this
    const structure = itemStorageStructure();
    if (!itemPayload) { return structure; }
    itemPayload.forEach((item) => {
      const i = new Item(item);
      pushCorrectDueStatus(structure, i);
    });
    return structure;
  }
}
