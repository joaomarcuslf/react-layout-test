/* @flow */
import dispatcher from '../Dispatcher/dispatcher.es6';
import Constants from '../Constants/Constants.es6';

function toggleDropdown() {
  dispatcher.dispatch({
    type: Constants.TOGGLE_DROPDOWN
  });
}

function selectTab(tab: object) {
  dispatcher.dispatch({
    type: Constants.SELECT_TAB,
    tab: tab
  });
}

export default {
  toggleDropdown: toggleDropdown,
  selectTab: selectTab
};
