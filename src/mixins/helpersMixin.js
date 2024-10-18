import {maxLengthValueInFields} from "../consts/max-length-value-fields";

export default {
    methods: {
        /**
         * Check is field full
         * @param { String } fieldRefName - Ref name of field element
         * @returns { Boolean }
         */
        isFieldFull(type, value) {
            if(!value) return false

            const currentValueLength = value.replace(/\s+/g, '').length;
            const typeFieldValueLength = maxLengthValueInFields[type]

            if(type === 'cardNumber') {
                return currentValueLength >= typeFieldValueLength
            }

            return currentValueLength === typeFieldValueLength
        },
        /**
         * Get index of item in array
         * @param { Object } item
         * @param { Array } array
         * @returns { Number }
         */
        itemIndex(item, array) {
            return array.map(obj => obj.ref).indexOf(item);
        },
        /**
         * Check is item first in array
         * @param { Object } item
         * @param { Array } array
         * @returns { Boolean }
         */
        isItemFirst(item, array) {
            return this.itemIndex(item, array) === 0;
        },
        /**
         * Check is item last in array
         * @param { Object } item
         * @param { Array } array
         * @returns { Boolean }
         */
        isItemLast(item, array) {
            return this.itemIndex(item, array) === array.length - 1;
        }
    }
};
