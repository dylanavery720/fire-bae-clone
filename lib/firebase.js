 /* eslint class-methods-use-this:0 */
import firebase from 'firebase';
import { firebaseConfig } from '../config/config';

export default class FirebaseTalker {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth;
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.signIn = this.signIn.bind(this);
    this.reference = this.reference.bind(this);
  }

  signIn() {
    return this.auth().signInWithPopup(this.provider);
  }

  signOut() {
    return this.auth().signOut();
  }

  onAuthStateChanged(callback) {
    return this.auth().onAuthStateChanged(callback);
  }

  reference() {
    return firebase.database().ref('items');
  }
}