/* @flow */
import dispatcher from '../Dispatcher/dispatcher.es6';
import Constants from '../Constants/Constants.es6';

function changeMenuState(project: object) {
  dispatcher.dispatch({
    type: Constants.CHANGE_MENU_STATE,
    project: project
  });
}

export default {
  changeMenuState: changeMenuState
};
