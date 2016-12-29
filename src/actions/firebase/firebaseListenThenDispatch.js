import firebase from 'firebase';

function action(reference, actionToDispatch) {
  return (dispatch) => {
    firebase.database().ref(reference).on('value', function(snapshot){
      dispatch(actionToDispatch(snapshot.val()));
    });
  }
}

module.exports = action;
