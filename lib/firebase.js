 /* eslint class-methods-use-this:0 */
import firebase from 'firebase';
import { firebaseConfig } from '../config/config';

export default class FirebaseTalker {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.database = firebase.database();
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.signIn = this.signIn.bind(this);
    this.itemsReference = this.reference.bind(this, 'items');
  }

  signIn() {
    return this.auth.signInWithPopup(this.provider);
  }

  signOut() {
    return this.auth.signOut();
  }

  onAuthStateChanged(callback) {
    return this.auth.onAuthStateChanged(callback);
  }

  currentUser() {
    return this.auth.currentUser;
  }

  reference(path) {
    return this.database.ref(path);
  }

  getItems(user, callback) {
    const reference = this.reference(`items/${user.uid}`);
    reference.on('value', (snapshot) => {
      const itemsPayload = snapshot.val() || {};
      const items = Object.values(itemsPayload);
      callback(items);
    });
  }

  createItem(user, itemPayload) {
    const uid = user.uid;
    return this.reference(`items/${uid}`).push(itemPayload);
  }
}