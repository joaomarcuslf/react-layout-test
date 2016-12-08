/* @flow */
import dispatcher from '../Dispatcher/dispatcher.es6';
import Constants from '../Constants/Constants.es6';

function handleEmailChange(email: string) {
  dispatcher.dispatch({
    type: Constants.CHANGING_EMAIL_FIELD,
    email: email
  });
}

export default {
  handleEmailChange: handleEmailChange
};
