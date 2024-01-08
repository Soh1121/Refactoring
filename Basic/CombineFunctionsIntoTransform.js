function client1() {
    const aReading = acquireReading();
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.Quantity;
}

function client2() {
    const aReading = acquireReading();
    const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
    const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
}

function client3() {
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const basicChargeAmount = calculateBaseCharge(aReading);

    function calculateBaseCharge(aReading) {
        return baseRate(aReading.month, aReading.year) * aReading.quantity;
    }
}

function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    return result;
}
