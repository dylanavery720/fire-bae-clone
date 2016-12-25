export default class Item {
  constructor(user, item) {
    this.user = {
      uid: user.uid,
    };
    this.name = item.name;
  }
}