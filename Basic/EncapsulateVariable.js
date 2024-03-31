spaceship.owner = getDefaultOwner();
setDefaultOwner({firstName: "Rebecca", lastName: "Parsons"});

// defaultOwner.js...
let defaultData = {firstName: "Martin", lastName: "Fowler"};
export function defaultOwner() {return defaultData;}
export function setDefaultOwner(arg) {defaultData = arg;}
