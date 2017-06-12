import firebase from 'firebase';
import { getTimestamp } from '../helpers/util';

const getRef = ref => firebase.database().ref(ref);

export const dbWrite = (reference, data, key = getTimestamp()) => {
  getRef(reference).update({ [key]: data });
};

export const dbWriteAndReturnKey = (reference, data) => {
  const db = getRef(reference);
  const key = db.push().key;

  db.update({ [key]: data });

  return key;
};

export const dbGetOnce = (reference) => {
  return getRef(reference).once('value');
};

export const dbListen = (reference, callback) => {
  getRef(reference).on('value', function(snapshot){
    callback(snapshot.val());
  });
};

export const dbListenAndDispatch = (reference, actionToDispatch) => {
  return (dispatch) => {
    getRef(reference).on('value', function(snapshot){
      dispatch(actionToDispatch(snapshot.val()));
    });
  }
};

export const dbRemove = (reference) => {
  getRef(reference).remove();
};

export const dbUpdate = (reference, data, key = getTimestamp()) => {
  const db = getRef(`${reference}/${key}`);
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
