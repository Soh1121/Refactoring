if (!aPlan.withinRange(aRoom.daysTempRange))
    alerts.push("室温が設定値を超えました");

class HeatingPlan
{
    withinRange(aNumberRange) {
        return (aNumberRange.low >= this._temperatureRange.low) &&
            (aNumberRange.high <= this._temperatureRange.high);
    }
}
