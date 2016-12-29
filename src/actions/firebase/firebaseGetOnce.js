import firebase from 'firebase';

function action(reference, itemToUpdate) {
  firebase.database().ref(reference).then(data => itemToUpdate = data)
}

module.exports = action;
