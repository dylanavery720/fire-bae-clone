/* eslint no-undef:0 comma-dangle:0*/
import Item from '../lib/Item';

describe('Item', () => {
  it('creates a new item', () => {
    const user = { uid: 7 };
    const itemPayload = { iName: 'New Item', freqNum: 1, freqQual: 'eon(s)' };
    const item = new Item(itemPayload, user);
    Object.keys(itemPayload).forEach((key) => {
      expect(item[key]).toEqual(itemPayload[key]);
    });
    expect(item.iName).toEqual('New Item');
    expect(item.user.uid).toEqual(7);
  });
});
