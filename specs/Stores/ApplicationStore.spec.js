const expect = require('../test-helper').default.expect;

const Constants = require('../../app/Constants/Constants.es6').default;

const ApplicationStore = require('../../app/Stores/ApplicationStore.es6').default;

describe('ApplicationStore', () => {

	describe('getNavbarState', () => {
		it('should return an brand new navbarState', () => {
			let result = ApplicationStore.getNavbarState();

			let expectedResult = {
				open: false,
				navBarItems: [
					{ name: 'DESTINOS', path: '#' },
					{ name: 'PLANOS', path: '#' },
					{ name: 'DEPOIMENTOS', path: '#' },
					{ name: 'CONTATO', path: '#' }
				]
			};

			expect(result).to.be.deep.equals(expectedResult);
		});
	});

	describe('changeMenuState', () => {
		it('should return an edited state of the navBar', () => {
			ApplicationStore.changeMenuState();
			let result = ApplicationStore.getNavbarState();

			let expectedResult = {
				open: true,
				navBarItems: [
					{ name: 'DESTINOS', path: '#' },
					{ name: 'PLANOS', path: '#' },
					{ name: 'DEPOIMENTOS', path: '#' },
					{ name: 'CONTATO', path: '#' }
				]
			};

			expect(result).to.be.deep.equals(expectedResult);
		});
		});

	describe('handleActions', () => {
		it('should respond to CHANGE_MENU_STATE action', () => {
			ApplicationStore.handleActions(Constants.CHANGE_MENU_STATE);
			let result = ApplicationStore.getNavbarState();

			let expectedResult = {
				open: true,
				navBarItems: [
					{ name: 'DESTINOS', path: '#' },
					{ name: 'PLANOS', path: '#' },
					{ name: 'DEPOIMENTOS', path: '#' },
					{ name: 'CONTATO', path: '#' }
				]
			};

			expect(result).to.be.deep.equals(expectedResult);
		});

		it('shouldn\' respond to NON_DEFINED action', () => {
			ApplicationStore.handleActions('NON_DEFINED');
			let result = ApplicationStore.getNavbarState();

			let expectedResult = {
				open: true,
				navBarItems: [
					{ name: 'DESTINOS', path: '#' },
					{ name: 'PLANOS', path: '#' },
					{ name: 'DEPOIMENTOS', path: '#' },
					{ name: 'CONTATO', path: '#' }
				]
			};

			expect(result).to.be.deep.equals(expectedResult);
		});
	});
});
