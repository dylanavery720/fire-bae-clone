import moment from 'moment';

import { formatPrettyDate, formatTimeStamp } from './utils';

function pullUserId(item, user) {
  if (user) {
    return user.uid;
  } else if (item && item.user) {
    return item.user.uid;
  }
  return null;
}

export const ITEMCOLUMNS = ['user', 'iName', 'freqNum', 'freqQual', 'timestamp', 'prettyDate'];

export default class Item {
  constructor(item, user) {
    this.user = {
      uid: pullUserId(item, user),
    };
    this.id = item.id || `${Date.now()}${item.iName}`;
    this.iName = item.iName;
    this.freqNum = item.freqNum;
    this.freqQual = item.freqQual;
    this.timestamp = item.timestamp || formatTimeStamp(item.date);
    this.prettyDate = item.prettyDate || formatPrettyDate(item.date);
    this.uTD = this.unitsTilDue();
    this.unitsTilDue = this.unitsTilDue.bind(this);
    this.sanitizedForDB = this.sanitizedForDB.bind(this);
  }

  sanitizedForDB() {
    const sanitizedItem = {};
    Object.keys(this).forEach((key) => {
      if (ITEMCOLUMNS.includes(key)) {
        sanitizedItem[key] = this[key];
      }
    });
    return sanitizedItem;
  }

  unitsTilDue() {
    const measuresUntilDue = moment(this.timestamp).diff(moment(), this.freqQual);
    return measuresUntilDue + this.freqNum;
  }
}
