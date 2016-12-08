/* @flow */
import dispatcher from '../Dispatcher/dispatcher.es6';
import Constants from '../Constants/Constants.es6';

function selectUser(user: object) {
  dispatcher.dispatch({
    type: Constants.TOGGLE_ACTIVE_USER,
    user: user
  });
}

function nextUser() {
  dispatcher.dispatch({
    type: Constants.GET_NEXT_USER
  });
}

function prevUser() {
  dispatcher.dispatch({
    type: Constants.GET_PREV_USER
  });
}

export default {
  selectUser: selectUser,
  nextUser: nextUser,
  prevUser: prevUser
};
