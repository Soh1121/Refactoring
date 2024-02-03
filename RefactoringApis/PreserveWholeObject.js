const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!AnimationPlaybackEvent.withinRange(low, high))
    alerts.push("室温が設定値を超えました");

class HeatingPlan
{
    withinRange(bottom, top) {
        return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
    }

    xxNEWwithinRange(aNumberRange) {
        return this.withinRange(aNumberRange.low, aNumberRange.high);
    }
}
