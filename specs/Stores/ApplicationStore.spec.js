const expect = require('../test-helper').default.expect;

const Constants = require('../../app/Constants/Constants.es6').default;

const ApplicationStore = require('../../app/Stores/ApplicationStore.es6').default;

describe('ApplicationStore', () => {
	describe('handleActions', () => {
		it('shouldn\' respond to NON_DEFINED action', () => {
			let result = ApplicationStore.getApplicationState();
			ApplicationStore.handleActions('NON_DEFINED');

			let expectedResult = ApplicationStore.getApplicationState();

			expect(result).to.be.deep.equals(expectedResult);
		});
	});

	describe('landingPage states', () => {
		it('validEmail should be false at beginning', () => {
      let result = ApplicationStore.getApplicationState();
      let validEmail = result.landingPage.validEmail;

      expect(validEmail).to.be.false;
    });

		it('validEmail should be false if invalid email is sent', () => {
      ApplicationStore.validateEmail('invalidEmail');

      let result = ApplicationStore.getApplicationState();
      let validEmail = result.landingPage.validEmail;

      expect(validEmail).to.be.false;
		});

		it('validEmail should be true if invalid email is sent', () => {
      ApplicationStore.validateEmail('emailtest@testing.com');

      let result = ApplicationStore.getApplicationState();
      let validEmail = result.landingPage.validEmail;

      expect(validEmail).to.be.true;
		});
	});

	describe('mainSection states', () => {
		it('should be closed by the begining', () => {
			let result = ApplicationStore.getApplicationState();
			let openDropdown = result.mainSection.openDropdown;

			expect(openDropdown).to.be.false;
		});

		it('should have the first card group selected at the begining', () => {
			let result = ApplicationStore.getApplicationState();
			let selectedGroup = result.mainSection.selectedCardGroup;

			expect(selectedGroup).to.be.equals('1');
		});

		describe('toggleDropdown', () => {
			it('should open dropdown', () => {
				let result = ApplicationStore.getApplicationState();
				ApplicationStore.toggleDropdown();
				let openDropdown = result.mainSection.openDropdown;

				expect(openDropdown).to.be.true;
			});

			it('should close dropdown', () => {
				let result = ApplicationStore.getApplicationState();
				ApplicationStore.toggleDropdown();
				let openDropdown = result.mainSection.openDropdown;

				expect(openDropdown).to.be.false;
			});
		});

		describe('selectTab', () => {
			it('should change the select group if different element is passed', () => {
				let mockedElement = { id: 2 };

				ApplicationStore.selectTab(mockedElement);

				let result = ApplicationStore.getApplicationState();
				let selectedGroup = result.mainSection.selectedCardGroup;

				expect(selectedGroup).to.be.equals('2');
			});

			it('should not change the select group if different element is passed', () => {
				let mockedElement = { id: 2 };

				ApplicationStore.selectTab(mockedElement);

				let result = ApplicationStore.getApplicationState();
				let selectedGroup = result.mainSection.selectedCardGroup;

				expect(selectedGroup).to.be.equals('2');
			});
		});
	});

	describe('extraSection states', () => {
		it('should have the first card group selected at the begining', () => {
			let result = ApplicationStore.getApplicationState();
			let selectedGroup = result.extraSection.activeUser;

			expect(selectedGroup).to.be.equals('1');
		});

		describe('toggleUser', () => {
			it('should change the active user', () => {
				ApplicationStore.toggleUser({ id: 3 });

				let result = ApplicationStore.getApplicationState();
				let selectedGroup = result.extraSection.activeUser;

				expect(selectedGroup).to.be.equals('3');
			});

			it('should not change the active user if the same is passed', () => {
				ApplicationStore.toggleUser({ id: 3 });

				let result = ApplicationStore.getApplicationState();
				let selectedGroup = result.extraSection.activeUser;

				expect(selectedGroup).to.be.equals('3');
			});

			it('should not change the active user if nothing is passes', () => {
				ApplicationStore.toggleUser();

				let result = ApplicationStore.getApplicationState();
				let selectedGroup = result.extraSection.activeUser;

				expect(selectedGroup).to.be.equals('3');
			});

			it('should change the active user to the first one', () => {
				ApplicationStore.toggleUser({ id: 1 });

				let result = ApplicationStore.getApplicationState();
				let selectedGroup = result.extraSection.activeUser;

				expect(selectedGroup).to.be.equals('1');
			});
		});

		describe('getNextUser', () => {
			it('should change to the next user(1 -> 2)', () => {
				ApplicationStore.toggleUser({ id: 1 });
				ApplicationStore.getNextUser();

				let result = ApplicationStore.getApplicationState();
				let selectedGroup = result.extraSection.activeUser;

				expect(selectedGroup).to.be.equals('2');
			});

			it('should change to the next user(2 -> 3)', () => {
				ApplicationStore.getNextUser();

				let result = ApplicationStore.getApplicationState();
				let selectedGroup = result.extraSection.activeUser;

				expect(selectedGroup).to.be.equals('3');
			});

			it('should change to the next user(3 -> 1)', () => {
				ApplicationStore.getNextUser();

				let result = ApplicationStore.getApplicationState();
				let selectedGroup = result.extraSection.activeUser;

				expect(selectedGroup).to.be.equals('1');
			});
		});

		describe('getPrevUser', () => {
			it('should change to the next user(1 -> 3)', () => {
				ApplicationStore.toggleUser({ id: 1 });
				ApplicationStore.getPrevUser();

				let result = ApplicationStore.getApplicationState();
				let selectedGroup = result.extraSection.activeUser;

				expect(selectedGroup).to.be.equals('3');
			});

			it('should change to the next user(3 -> 2)', () => {
				ApplicationStore.getPrevUser();

				let result = ApplicationStore.getApplicationState();
				let selectedGroup = result.extraSection.activeUser;

				expect(selectedGroup).to.be.equals('2');
			});

			it('should change to the next user(2 -> 1)', () => {
				ApplicationStore.getPrevUser();

				let result = ApplicationStore.getApplicationState();
				let selectedGroup = result.extraSection.activeUser;

				expect(selectedGroup).to.be.equals('1');
			});
		});
	});
});
