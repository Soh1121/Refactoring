class Organization {
    constructor(data) {
        this._data = data;
    }
    get name() {return this._data.name;}
    set name(aString) {this._data.name = aString;}
}

function getOrganization() {return organization;}

const organization = new Organization({name: "Acme Gooseberries", country: "GB"});

result += `<h1>${getOrganization().name}</h1>`;

getOrganization().name = newName;
