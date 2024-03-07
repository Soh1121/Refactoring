class Employee {
    constructor (name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;
    }
    validateType(arg) {
        if (!["engineer", "manager", "salesman"].includes(arg))
            throw new Error(`従業員のタイプコードが不正：${arg}`);
    }
    get type() {return this._type;}
    toString() {return `${this._name} (${this.type})`;}
}

class Engineer extends Employee {
    get type() {return "engineer";}
}