spaceship.owner = getDefaultOwner();
setDefaultOwner({firstName: "Rebecca", lastName: "Parsons"});

// defaultOwner.js...
let defaultOwner = {firstName: "Martin", lastName: "Fowler"};
export function getDefaultOwner() {return defaultOwner;}
export function setDefaultOwner(arg) {defaultOwner = arg;}
