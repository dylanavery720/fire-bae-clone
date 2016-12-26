export default class Item {
  constructor(user, item) {
    this.user = {
      uid: user.uid,
    };
    this.iName = item.iName;
    this.freqNum = item.freqNum;
    this.freqQual = item.freqQual;
  }
}
