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

    this.states = {
      landingPage: {
        inputField: '',
        validEmail: false,
        icons: [
          { iconName: 'plane', alt: 'Plane Icon' },
          { iconName: 'wallet', alt: 'Wallet Icon' },
          { iconName: 'case', alt: 'Case Icon' }
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

  handleActions(action: object) {
    switch (action.type) {
      case Constants.CHANGING_EMAIL_FIELD:
        this.validateEmail(action.email);
        break;
      default:
        break;
    }
  }
}

const applicationStore = new ApplicationStore();
dispatcher.register(applicationStore.handleActions.bind(applicationStore));

export default applicationStore;
