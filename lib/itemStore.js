import Item from './Item';

export default class ItemStore {
  constructor(itemPayload) {
    this.items = this.populate(itemPayload);
  }

  makeNew(itemPayload, user) {  // eslint-disable-line class-methods-use-this
    return new Item(itemPayload, user);
  }

  create(itemPayload, user) {
    const item = this.makeNew(itemPayload, user);
    const itemStorage = this.items.slice();
    itemStorage.push(item);
    this.items = itemStorage;
    return item;
  }

  populate(itemPayload) { // eslint-disable-line class-methods-use-this
    if (!itemPayload) { return []; }
    return itemPayload.map((item) => new Item(item));
  }
}
