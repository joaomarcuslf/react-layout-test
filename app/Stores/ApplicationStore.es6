/* @flow */
import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher/dispatcher.es6';
import Constants from '../Constants/Constants.es6';

class ApplicationStore extends EventEmitter {
  constructor() {
    super();

		this.helpers = {};

		this.navBarStates = {
			open: false,
			navBarItems: [
				{ name: 'DESTINOS', path: '#' },
				{ name: 'PLANOS', path: '#' },
				{ name: 'DEPOIMENTOS', path: '#' },
				{ name: 'CONTATO', path: '#' }
			]
		};
  }

  getNavbarState(): boolean {
    return this.navBarStates;
  }

	changeMenuState() {
		let newNavbarState = this.getNavbarState();

		newNavbarState.open = !newNavbarState.open;

		this.navBarStates = newNavbarState;
    this.emit('change');
  }

  handleActions(action: object) {
    switch(action.type) {
      case Constants.CHANGE_MENU_STATE:
        this.changeMenuState();
        break;
      default:
        break;
    }
  }
}

const applicationStore = new ApplicationStore();
dispatcher.register(applicationStore.handleActions.bind(applicationStore));

export default applicationStore;
