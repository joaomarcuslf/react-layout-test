/* @flow */
import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher/dispatcher.es6';
import Constants from '../Constants/Constants.es6';

class NavigationStore extends EventEmitter {
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

    this.footerStates = {
      contactTexts: [
        'Rua Nome da Rua, 300 Rio de Janeiro - RJ',
        '+55 21 1234-5678',
        'contato@lojasamericanas.net'
      ],
      icons: [
        { iconName: 'pinterest', alt: 'Logo Pinterest' },
        { iconName: 'facebook', alt: 'Logo Facebook' },
        { iconName: 'twitter', alt: 'Logo Twitter' }
      ]
    };
  }

  getNavbarState(): boolean {
    return this.navBarStates;
  }

  getFooterState(): boolean {
    return this.footerStates;
  }

  changeMenuState() {
    /*
      @params:

      Will change Navbar open state
    */

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

const navigationStore = new NavigationStore();
dispatcher.register(navigationStore.handleActions.bind(navigationStore));

export default navigationStore;
