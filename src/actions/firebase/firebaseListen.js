import firebase from 'firebase';

function action(reference, callback) {
  firebase.database().ref(reference).on('value', function(snapshot){
    callback(snapshot.val());
  });
}

module.exports = action;
