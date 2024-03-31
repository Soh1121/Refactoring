class ProductionPlan
{
    constructor (production) {
        this._production = production;
        this._adjustments = [];
    }
    get production() {this._production;}

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}
