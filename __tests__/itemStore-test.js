/* eslint no-undef:0 comma-dangle:0*/
import ItemStore from '../lib/ItemStore';
import sampleFormItem from '../__test-helpers__/sampleItemFormPayload';
import sampleItems from '../__test-helpers__/sampleItemsPayload';

import Item from '../lib/Item';

describe('ItemStore', () => {
  let subject;

  beforeEach(() => {
    subject = new ItemStore();
  });

  describe('.new', () => {
    it('generates an unstored new item from firebase data', () => {
      const itemPayload = sampleItems[0];
      const output = subject.makeNew(itemPayload);
      expect(output).toBeInstanceOf(Item);
      Object.keys(itemPayload).forEach((key) => {
        expect(output[key]).toEqual(itemPayload[key]);
      });
      expect(output.id).toEqual('-K_0m05PNVsqNHxP1XFp');
      expect(output.user.uid).toEqual('VCDW6de4Blhrdd8AfoLAck6Gr8h1');
      expect(subject.items).toEqual([]);
    });

    it('generates an unstored new item from form data', () => {
      const itemPayload = sampleFormItem;
      const output = subject.makeNew(itemPayload, { uid: 7 });
      expect(output).toBeInstanceOf(Item);
      Object.keys(itemPayload).forEach((key) => {
        if (key !== 'date') {
          expect(output[key]).toEqual(itemPayload[key]);
        }
      });
      expect(output.id.includes('Socks')).toEqual(true);
      expect(output.timestamp).toEqual('2016-12-28T10:56:29-07:00');
      expect(output.prettyDate).toEqual('December 28th 2016');
      expect(output.user.uid).toEqual(7);
      expect(subject.items).toEqual([]);
    });
  });

  describe('initialize', () => {
    it('takes a payload and creates items', () => {
      subject = new ItemStore(sampleItems);
      expect(subject.items.length).toEqual(4);
      expect(subject.items[0].iName).toEqual('Socks');
      expect(subject.items[0]).toBeInstanceOf(Item);
    });
  });

  describe('.create', () => {
    it('creates an item and saves it to the items', () => {
      const itemPayload = sampleItems[0];
      subject.create(itemPayload);
      expect(subject.items.length).toEqual(1);

      const itemPayload2 = sampleItems[1];
      subject.create(itemPayload2);
      expect(subject.items.length).toEqual(2);
    });
  });

  describe('.all', () => {
    it('sorts items by due, coming soon, future', () => {
    // const input = sampleItems;
    // const output = itemStore(input).dividedByDue();
    // const expectedOutput = {};
    // expect(output).toEqual(expectedOutput);
    });
  });
});
