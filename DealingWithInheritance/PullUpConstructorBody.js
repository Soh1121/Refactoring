class Employee {
    constructor (name) {

    }

    get isPrivileged() {

    }

    assignCar() {

    }
}

class Manager extends Employee {
    constructor (name, grade) {
        super(name);
        this._grade = grade;
        if (this.isPrivileged) this.assignCar; // すべてのサブクラスでこの処理を行っている
    }

    get isPrivileged() {
        return this._grade > 4;
    }
}
