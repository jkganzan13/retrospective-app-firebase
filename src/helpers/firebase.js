import firebase from 'firebase';

export const dbWrite = (reference, data) => {
  const db = firebase.database().ref(reference);
  const key = db.push().key;

  db.update({ [key]: data });

  return key;
};

export const dbGetOnce = (reference, itemToUpdate) => {
  firebase.database().ref(reference).then(data => itemToUpdate = data)
};

export const dbListen = (reference, callback) => {
  firebase.database().ref(reference).on('value', function(snapshot){
    callback(snapshot.val());
  });
};

export const dbListenAndDispatch = (reference, actionToDispatch) => {
  return (dispatch) => {
    firebase.database().ref(reference).on('value', function(snapshot){
      dispatch(actionToDispatch(snapshot.val()));
    });
  }
};
