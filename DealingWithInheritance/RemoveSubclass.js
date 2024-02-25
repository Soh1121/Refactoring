class Person
{
    constructor(name) {
        this._name = name;
    }

    get name()       {return this._name;}
    get genderCode() {return "X";}
}

class Male extends Person
{
    get genderCode() {return "M";}
}

class Female extends Person
{
    get genderCode() {return "F";}
}

const numberOfMales = people.filter(p => p instanceof Male).length;

function createPerson(aRecord) {
    let p;
    switch (aRecord.gender) {
        case 'M': p = new Male(aRecord.name); break;
        case 'F': p = new Female(aRecord.name); break;
        default: p = new Person(aRecord.name); break;
    }
    return p;
}

function loadFromInput(data) {
    const result = [];
    data.forEach(aRecord => {
        result.push(createPerson(aRecord));
    });
    return result;
}
