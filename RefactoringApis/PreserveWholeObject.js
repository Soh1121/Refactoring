if (!aPlan.xxNEWwithinRange(aRoom.daysTempRange))
    alerts.push("室温が設定値を超えました");

class HeatingPlan
{
    withinRange(bottom, top) {
        return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
    }

    xxNEWwithinRange(aNumberRange) {
        return (aNumberRange.low >= this._temperatureRange.low) &&
            (aNumberRange.high <= this._temperatureRange.high);
    }
}
