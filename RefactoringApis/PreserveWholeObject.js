const tempRange = aRoom.daysTempRange;
const withinRange = aPlan.xxNEWwithinRange(tempRange);
if (!isWithinRange)
    alerts.push("室温が設定値を超えました");

class HeatingPlan
{
    withinRange(bottom, top) {
        return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
    }

    xxNEWwithinRange(tempRange) {
        const low = tempRange.low;
        const high = tempRange.high;
        const isWithinRange = this.withinRange(low, high);
        return isWithinRange;
    }
}
