class Order
{
    constructor(data) {
        this.priority = data.priority;
        // 初期化が続く
    }
    get priority() {return this._priority;}
    set priority(aString) {this._priority = aString;}
}

class Priority
{
    constructor(value) {this._value = value;}
    toString() {return this._value;}
}

// client...
highPriorityCount = orders.filter(o => "high" === o.priority
                                    || "rush" === o.priority)
                            .length;
