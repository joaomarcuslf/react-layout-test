/* @flow */
import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher/dispatcher.es6';
import Constants from '../Constants/Constants.es6';

class NavbarStore extends EventEmitter {
  constructor() {
    super();

    this.helpers = {};
    this.open = false;
    this.navBarItems = [
      { name: 'DESTINOS', path: '#' },
      { name: 'PLANOS', path: '#' },
      { name: 'DEPOIMENTOS', path: '#' },
      { name: 'CONTATO', path: '#' }
    ];
  }

  getMenuState(): boolean {
    return this.open;
  }

  changeMenuState() {
    this.open = !this.open;
    this.emit('change');
  }

  getNavbarItems(): array {
    return this.navBarItems;
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

const navbarStore = new NavbarStore();
dispatcher.register(navbarStore.handleActions.bind(navbarStore));

export default navbarStore;
