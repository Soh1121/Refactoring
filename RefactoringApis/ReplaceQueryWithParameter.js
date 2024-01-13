class HeatingPlan {
    get targetTemperature() {
        return this.xxNEWTargetTemperature(thermostat.selectedTemperature);
    }

    xxNEWTargetTemperature(selectedTemperature) {
        if      (selectedTemperature > this._max) return this._max;
        else if (selectedTemperature < this._min) return this._min;
        else return selectedTemperature;
    }
}

if      (thePlan.xxNEWTargetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) setToHeat();
else if (thePlan.xxNEWTargetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) setToCool();
else setOff();
