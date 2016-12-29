import firebase from 'firebase';

function action(reference, data) {
  const db = firebase.database().ref(reference);
  const key = db.push().key;

  db.update({ [key]: data });

  return key;
}

module.exports = action;
