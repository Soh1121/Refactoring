function client1() {
    const rawReading = acquireReading()
    const aReading = enrichReading(rawReading);
    const baseCharge = aReading.baseCharge;
}

function client2() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const taxableCharge = aReading.taxableCharge;
}

function client3() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const basicChargeAmount = aReading.baseCharge;
}

function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
    return result;
}

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
