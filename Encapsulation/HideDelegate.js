class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {return this._name;}
    get chargeCode() {return this._department.chargeCode;}
    set chargeCode(arg) {this._department.chargeCode = arg;}
    get manager() {return this._department.manager;}
    set manager(arg) {this._department.manager = arg;}
}

class Department {
    get chargeCode() {return this._chargeCode;}
    set chargeCode(arg) {this._chargeCode = arg;}
    get manager() {return this._manager;}
    set manager(arg) {this._manager = arg;}
}

// client code
manage = aPerson.manager;
