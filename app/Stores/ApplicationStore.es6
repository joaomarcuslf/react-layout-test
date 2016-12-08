/* @flow */
import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher/dispatcher.es6';
import Constants from '../Constants/Constants.es6';
import EmailHelper from '../Helpers/EmailHelper.es6';

class ApplicationStore extends EventEmitter {
  constructor() {
    super();

    this.helpers = {
      emailHelper: new EmailHelper()
    };

    /*
      @TODO
        This data must come from and Back-end or json
    */

    this.states = {
      landingPage: {
        inputField: '',
        validEmail: false,
        icons: [
          { iconName: 'plane', alt: 'Plane Icon' },
          { iconName: 'wallet', alt: 'Wallet Icon' },
          { iconName: 'case', alt: 'Case Icon' }
        ]
      },
      mainSection: {
        selectedCardGroup: '1',
        cards: {
          '1': [
            { cardName: 'card-1@3x' },
            { cardName: 'card-2@3x' },
            { cardName: 'card-3@3x' },
            { cardName: 'card-4@3x' },
            { cardName: 'card-5@3x' },
            { cardName: 'card-6@3x' }
          ],
          '2': [
            { cardName: 'card-4@3x' },
            { cardName: 'card-5@3x' },
            { cardName: 'card-6@3x' },
            { cardName: 'card-2@3x' }
          ],
          '3': [
            { cardName: 'card-2@3x' },
            { cardName: 'card-4@3x' },
            { cardName: 'card-3@3x' }
          ],
          '4': [
            { cardName: 'card-3@3x' },
            { cardName: 'card-6@3x' },
            { cardName: 'card-2@3x' },
            { cardName: 'card-4@3x' },
            { cardName: 'card-4@3x' }
          ]
        },
        openDropdown: false,
        tabs: [
          { tabName: 'São Francisco', isActive: true, id: 1 },
          { tabName: 'Paris', isActive: false, id: 2 },
          { tabName: 'Londres', isActive: false, id: 3 },
          { tabName: 'Sidney', isActive: false, id: 4 }
        ]
      }
    };
  }

  getApplicationState(): object {
    return this.states;
  }

  validateEmail(email: string): object {
    /*
      @params:
        email: string
      Will change the button class if email has valid pattern
    */

    let validEmail = this.helpers.emailHelper.validate(email);

    this.states.landingPage.validEmail = validEmail;
    this.states.landingPage.inputField = email;

    this.emit('change');
  }

  toggleDropdown() {
    /*
      @params:

      Will change the dropdown from open to closed (only tablet and mobile)
    */

    this.states.mainSection.openDropdown = !this.states.mainSection.openDropdown;
    this.emit('change');
  }

  selectTab(newElem: object) {
    /*
      @params:
        newElem: object
      Will change the states from the tabs to select one of them
    */

    let newTabs =
    this.states.mainSection.tabs
    .map((elem: object): object => {
      (elem.id === newElem.id) ?
        elem.isActive = true :
        elem.isActive = false;

      return elem;
    });

    this.states.mainSection.tabs = newTabs;

    this.states.mainSection.selectedCardGroup = newElem.id.toString();

    this.emit('change');
  }

  handleActions(action: object) {
    switch (action.type) {
      case Constants.CHANGING_EMAIL_FIELD:
        this.validateEmail(action.email);
        break;
      case Constants.TOGGLE_DROPDOWN:
        this.toggleDropdown();
        break;
      case Constants.SELECT_TAB:
        this.selectTab(action.tab);
        break;
      default:
        break;
    }
  }
}

const applicationStore = new ApplicationStore();
dispatcher.register(applicationStore.handleActions.bind(applicationStore));

export default applicationStore;
