const expect = require('../test-helper').default.expect;

const EmailHelper = require('../../app/Helpers/EmailHelper.es6');

const HelperTest = new EmailHelper.default();


describe('EmailHelper', () => {
	describe('validate', () => {
		it('should return true for an valid email', () => {
			let emailToTest = 'emailtest@testing.com';
			let result = HelperTest.validate(emailToTest);

			expect(result).to.be.true;
		});

		it('should return false for an invalid email(without @)', () => {
			let emailToTest = 'emailtesttesting.com';
			let result = HelperTest.validate(emailToTest);

			expect(result).to.be.false;
		});

		it('should return false for an invalid email(without .)', () => {
			let emailToTest = 'emailtest@testingcom';
			let result = HelperTest.validate(emailToTest);

			expect(result).to.be.false;
		});

		it('should return false for an invalid email(without sub-domain)', () => {
			let emailToTest = 'emailtest@.com';
			let result = HelperTest.validate(emailToTest);

			expect(result).to.be.false;
		});

		it('should return false for an invalid email(just a word)', () => {
			let emailToTest = 'email';
			let result = HelperTest.validate(emailToTest);

			expect(result).to.be.false;
		});
	});
});
