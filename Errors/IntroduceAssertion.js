const { assert } = require("chai");

class Customer {
    set discountRate(aNumber) {
        assert(null === aNumber || aNumber >= 0);
        this._discountRate = aNumber;
    }

    applyDiscount(aNumber) {
        return (this.discountRate)
            ? aNumber - (this.discountRate * aNumber)
            : aNumber;
    }
}
