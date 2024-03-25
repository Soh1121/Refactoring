reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

// client 1...
function client1() {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const baesCharge = aReading.baseCharge;
}

// client 2...
function client2() {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const taxableCharge = taxableChargeFn(aReading);

    function taxableChargeFn(aReading) {
        return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
    }
}

// client 3...
function client3() {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const basicChargeAmount = aReading.baseCharge;

}

class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() {return this._customer;}
    get quantity() {return this._quantity;}
    get month() {return this._month;}
    get year() {return this._year;}

    get baseCharge() {
        return baseRate(this.month, this.year) * this.quantity;
    }
}
