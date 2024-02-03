if (!aPlan.withinRange(aRoom.daysTempRange))
    alerts.push("室温が設定値を超えました");

class HeatingPlan
{
    withinRange(tempRange) {
        return (tempRange.low >= this._temperatureRange.low) &&
            (tempRange.high <= this._temperatureRange.high);
    }
}
