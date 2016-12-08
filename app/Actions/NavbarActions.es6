/* @flow */
import dispatcher from '../Dispatcher/dispatcher.es6';
import Constants from '../Constants/Constants.es6';

function changeMenuState() {
  dispatcher.dispatch({
    type: Constants.CHANGE_MENU_STATE
  });
}

export default {
  changeMenuState: changeMenuState
};
