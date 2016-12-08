const expect = require('../test-helper').default.expect;

const ActiveStateHelper = require('../../app/Helpers/ActiveStateHelper.es6');

const HelperTest = new ActiveStateHelper.default();

const testArray = [
	{ id: 1, isActive: false, name: 'test1' },
	{ id: 2, isActive: false, name: 'test2' },
	{ id: 3, isActive: false, name: 'test3' },
	{ id: 4, isActive: true, name: 'test4' },
];

describe('ActiveStateHelper', () => {
	describe('toggleById', () => {
		it('should change the active state', () => {
			let selectedElem = {
				id: 2
			};

			let result = HelperTest.toggleById(testArray, selectedElem);

			let expectedResult = [
				{ id: 1, isActive: false, name: 'test1' },
				{ id: 2, isActive: true, name: 'test2' },
				{ id: 3, isActive: false, name: 'test3' },
				{ id: 4, isActive: false, name: 'test4' },
			];

			expect(result).to.be.deep.equals(expectedResult);

		});

		it('should change the active state', () => {
			let selectedElem = {
				id: 5
			};

			let result = HelperTest.toggleById(testArray, selectedElem);

			let expectedResult = [
				{ id: 1, isActive: false, name: 'test1' },
				{ id: 2, isActive: false, name: 'test2' },
				{ id: 3, isActive: false, name: 'test3' },
				{ id: 4, isActive: false, name: 'test4' },
			];

			expect(result).to.be.deep.equals(expectedResult);

		});
	});

	describe('toggleActive', () => {
		it('TOGGLE BY NAME should change the active state', () => {
			let selectedElem = {
				id: 2,
				name: 'test2'
			};

			let result = HelperTest.toggleActive(testArray, selectedElem, 'name');

			let expectedResult = [
				{ id: 1, isActive: false, name: 'test1' },
				{ id: 2, isActive: true, name: 'test2' },
				{ id: 3, isActive: false, name: 'test3' },
				{ id: 4, isActive: false, name: 'test4' },
			];

			expect(result).to.be.deep.equals(expectedResult);

		});
	});
});
