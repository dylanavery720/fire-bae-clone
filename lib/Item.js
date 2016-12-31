function formatPrettyDate(date) {
  return date ? date.format('MMMM Do Y') : '';
}

function formatTimeStamp(date) {
  return date ? date.format() : '';
}

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
    this.dueStatus = this.calculateDueDate();
    this.calculateDueDate = this.calculateDueDate.bind(this);
    this.sanitizedForDB = this.sanitizedForDB.bind(this);
  }

  sanitizedForDB() {
    const sanitizedItem = {};
    Object.keys(this).forEach((key, value) => {
      if (ITEMCOLUMNS.includes(key)) {
        sanitizedItem[key] = value;
      }
    });
    return sanitizedItem;
  }

  calculateDueDate() {
    return 'bananas';
  }
}
