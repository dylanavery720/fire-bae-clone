/* eslint no-undef:0 comma-dangle:0*/
import moment from 'moment';

import Item from '../lib/Item';

import sampleFormItem from '../__test-helpers__/sampleItemFormPayload';

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

  describe('unitsTilDue', () => {
    let subject;

    beforeEach(() => {
      const user = { uid: 7 };
      const itemPayload = sampleFormItem;
      subject = new Item(itemPayload, user);
    });

    it('calculates a past due item', () => {
      subject.freqQual = 'month';
      subject.timestamp = moment().subtract(3, 'M').subtract(1, 'd'); // purchased over 3 months ago
      subject.freqNum = 1;
      expect(subject.unitsTilDue()).toEqual(-2);

      subject.freqNum = 3;
      expect(subject.unitsTilDue()).toEqual(0);

      subject.freqNum = 4;
      expect(subject.unitsTilDue()).toEqual(1);
    });

    it('calculates year and week', () => {
      subject.freqQual = 'year';
      subject.timestamp = moment().subtract(3, 'Y').subtract(1, 'd');
      subject.freqNum = 7;
      expect(subject.unitsTilDue()).toEqual(4);

      subject.freqQual = 'week';
      subject.timestamp = moment().subtract(3, 'w').subtract(1, 'd');
      subject.freqNum = 1;
      expect(subject.unitsTilDue()).toEqual(-2);
    });
  });
});
