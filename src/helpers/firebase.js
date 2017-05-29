import firebase from 'firebase';
import { getTimestamp } from '../helpers/util';

export const dbWrite = (reference, data, key = getTimestamp()) => {
  const db = firebase.database().ref(reference);
  db.update({ [key]: data });
};

export const dbWriteAndReturnKey = (reference, data) => {
  const db = firebase.database().ref(reference);
  const key = db.push().key;

  db.update({ [key]: data });

  return key;
};

export const dbGetOnce = (reference) => {
  return firebase.database().ref(reference).once('value');
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

export const dbRemove = (reference) => {
  const db = firebase.database().ref(reference);
  db.remove();
};

export const dbUpdate = (reference, data, key = getTimestamp()) => {
  const db = firebase.database().ref(`${reference}/${key}`);
  db.once('value').then((review) => {
    if (review.val()) {
      data = {...review.val(), comment: data.comment}
    }
    dbWrite(reference, data, key);
  });
};

export const addReviewActionPoint = (sessionId, key, data) => {
  const id = 'AP' + getTimestamp();
  dbWrite(`reviews/${sessionId}/${key}/actionPoints`, data, id);
};

const getRef = ref => firebase.database().ref(ref);

export const updateReviewActionPoint = async (sessionId, key, data, actionPointId) => {
  const ref = `reviews/${sessionId}/${key}/actionPoints`;
  const actionPoint = await getRef(ref).once('value');
  if(actionPoint.val()) {
    data = { ...actionPoint.val(), actionPoint: data.actionPoint };
  }
  dbWrite(ref, data, actionPointId);
};
