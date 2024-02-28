class ChargeCalculator {
    constructor (customer, usage, provider) {
    }
    get baseCharge() {
        return this._customer.baseRate * this._usage;
    }
    charge(customer, usage, provider) {
        const baseCharge = customer.baseRate * usage;
        return baseCharge + provider. connectionCharge;
    }
}

monthCharge = charge(customer, usage, provider);

function charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider. connectionCharge;
}
