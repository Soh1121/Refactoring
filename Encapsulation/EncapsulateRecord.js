class Organization {
    constructor(data) {
        this._data = data;
    }
}

function getRawDataOfOrganization() {return organization._data;}
function getOrganization() {return organization;}

const organization = new Organization({name: "Acme Gooseberries", country: "GB"});

result += `<h1>${getRawDataOfOrganization().name}</h1>`;

getRawDataOfOrganization().name = newName;
