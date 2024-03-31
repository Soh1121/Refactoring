// client code...
manager = aPerson.department.manager;

class Person
{
    get department() {return this._department;}
    get manager() {return this.department.manager;}
}

class Department
{
    get manager() {return this._manager;}
}
