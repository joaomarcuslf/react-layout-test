/* @flow */
export default class EmailHelper {
	constructor(): object {
		this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		this.validate = this.validate.bind(this);
	}

	validate(email: string): object {
		/*
			@params
				email: string
			Should test for valid email with regex
		*/

    return this.emailRegex.test(email);
	}
}
