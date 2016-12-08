/* @flow */
export default class ActiveStateHelper {
	constructor(): object {}

	toggleActive(oldArray: array, elementToCompare: object, property: string): array {
		/*
			@params
				oldArray: array,
				elementToCompare: object,
				property: string
			Should change the active state from any element in the array
		*/

		if(!property) {
			// Sanity check
			return oldArray;
		}

    let newArray =
    oldArray
    .map((elem: object): object => {
      (elem[property] === elementToCompare[property]) ?
        elem.isActive = true :
        elem.isActive = false;

      return elem;
    });

		return newArray;
	}

	toggleById(oldArray: array, elementToCompare: object): array {
		/*
			@params
				oldArray: array,
				elementToCompare: object
			Should be the bridge for toggleActive but with ID
		*/

		return this.toggleActive(oldArray, elementToCompare, 'id');
	}
}
