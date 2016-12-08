/* @flow */
import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher/dispatcher.es6';
import Constants from '../Constants/Constants.es6';
import EmailHelper from '../Helpers/EmailHelper.es6';
import ActiveStateHelper from '../Helpers/ActiveStateHelper.es6';

class ApplicationStore extends EventEmitter {
  constructor() {
    super();

    this.helpers = {
      emailHelper: new EmailHelper(),
      activeStateHelper: new ActiveStateHelper()
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
      },
      extraSection: {
        activeUser: '1',
        users: [
          {
            isActive: true,
            id: 1,
            userName: 'Julia Souza',
            destiny: 'destino: Helsinki, Finlândia',
            path: 'foto1@3x',
            userOpinion:
            '“A viagem foi ótima! O serviço oferecido pela Lojas Americanas foi perfeito.' +
            ' Não vemos a hora das próximas férias chegarem e prepararmos as malas de novo.”'
          },
          {
            isActive: false,
            id: 2,
            userName: 'Patrício Ambrósio',
            destiny: 'destino: Dubaí, Emirados Árabes Unidos',
            path: 'foto2',
            userOpinion:
            '“Adorei o serviço, a viagem foi ótima”'
          },
          {
            isActive: false,
            id: 3,
            userName: 'Antônio Luca',
            destiny: 'destino: Belfast, Irland do Norte',
            path: 'foto3',
            userOpinion:
            '“Adorei o local, foi tudo excelente.”'
          }
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

    let newTabs = this.helpers.activeStateHelper.toggleById(
      this.states.mainSection.tabs,
      newElem
    );

    this.states.mainSection.tabs = newTabs;

    this.states.mainSection.selectedCardGroup = newElem.id.toString();

    this.emit('change');
  }

  toggleUser(newUser: object) {
    /*
      @params:
        newUser: object
      Will change the states from the users to select one of them
    */

    if(!newUser) {
      // Sanity Check
      return;
    }

    let newUsers = this.helpers.activeStateHelper.toggleById(
      this.states.extraSection.users,
      newUser
    );

    this.states.extraSection.users = newUsers;

    this.states.extraSection.activeUser = newUser.id.toString();

    this.emit('change');
  }

  getNextUser() {
    /*
      @params

      Will change the selected user for the next
    */

    let actualUserId = parseInt(this.states.extraSection.activeUser) + 1;
    let usersLength = this.states.extraSection.users.length + 1;

    if(actualUserId === usersLength) {
      actualUserId = 1;
    }

    this.toggleUser({
      id: actualUserId
    });
  }

  getPrevUser() {
    /*
      @params

      Will change the selected user for the previous
    */

    let actualUserId = parseInt(this.states.extraSection.activeUser) - 1;
    let usersLength = this.states.extraSection.users.length + 1;

    if(actualUserId === 0) {
      actualUserId = usersLength - 1;
    }

    this.toggleUser({
      id: actualUserId
    });
  }

  handleActions(action: object) {
    switch (action.type) {
      case Constants.CHANGING_EMAIL_FIELD:
        this.validateEmail(action.email);
        break;
      case Constants.TOGGLE_DROPDOWN:
        this.toggleDropdown();
        break;
      case Constants.TOGGLE_ACTIVE_USER:
        this.toggleUser(action.user);
        break;
      case Constants.GET_NEXT_USER:
        this.getNextUser();
        break;
      case Constants.GET_PREV_USER:
        this.getPrevUser();
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
