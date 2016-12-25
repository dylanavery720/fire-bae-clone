import Item from '../lib/Item';

describe('Item', () => {
  it('creates a new item', () => {
    const user = { uid: 7 };
    const itemPayload = { name: 'New Item' };
    const item = new Item(user, itemPayload);
    expect(item.name).toEqual('New Item');
    expect(item.user.uid).toEqual(7); 
  });
});