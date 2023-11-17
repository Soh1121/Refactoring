class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._setDiscountRate = discountRate;
        this._contract = new CustomerContract(dateToday());
    }
    get discountRate() {return this._discountRate;}
    _setDiscountRate(aNumber) {this._discountRate = aNumber;}
    becomePreferred() {
        this._setDiscountRate(this._discountRate + 0.03);
        // さらに便宜を図る
    }
    applyDiscount(amount) {
        return amount.subtract(amount.multiple(this.discountRate));
    }
}

class CustomerContract {
    constructor(startDate, discountRate) {
        this._startDate = startDate;
        this._discountRate = discountRate;
    }
    get discountRate() {return this._discountRate;}
    set discountRate(arg) {this._discountRate = arg;}
}