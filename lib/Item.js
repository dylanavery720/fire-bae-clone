function formatPrettyDate(date) {
  return date ? date.format('MMMM Do Y') : '';
}

function formatTimeStamp(date) {
  return date ? date.format() : '';
}

export default class Item {
  constructor(user, item) {
    this.user = {
      uid: user.uid,
    };
    this.iName = item.iName;
    this.freqNum = item.freqNum;
    this.freqQual = item.freqQual;
    this.timestamp = formatTimeStamp(item.date);
    this.prettyDate = formatPrettyDate(item.date);
  }
}
