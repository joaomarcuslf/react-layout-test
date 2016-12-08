const expect = require('../test-helper').default.expect;

const Constants = require('../../app/Constants/Constants.es6').default;

const NavigationStore = require('../../app/Stores/NavigationStore.es6').default;

describe('NavigationStore', () => {

	describe('getNavbarState', () => {
		it('should return an brand new navbarState', () => {
			let result = NavigationStore.getNavbarState();

			let expectedResult = 'object';

			expect(typeof result).to.equals(expectedResult);
		});
	});

	describe('changeMenuState', () => {
		it('should return an edited state of the navBar', () => {
			NavigationStore.changeMenuState();
			let result = NavigationStore.getNavbarState();

			expect(result.open).to.be.true;
		});
		});

	describe('handleActions', () => {
		it('shouldn\' respond to NON_DEFINED action', () => {
			NavigationStore.handleActions('NON_DEFINED');
			let result = NavigationStore.getNavbarState();

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

		it('should respond to CHANGE_MENU_STATE action', () => {
			NavigationStore.handleActions(Constants.CHANGE_MENU_STATE);
			let result = NavigationStore.getNavbarState();

			expect(result.open).to.be.true;
		});
	});
});
