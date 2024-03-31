// client code...
manager = aPerson.manager;

class Person
{
    get department() {return this._department;}
    get manager() {return this._department.manager;}
}

class Department
{
    get manager() {return this._manager;}
}
