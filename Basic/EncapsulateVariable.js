spaceship.owner = getDefaultOwner();
setDefaultOwner({firstName: "Rebecca", lastName: "Parsons"});

const owner1 = defaultOwner();
assert.equal("Fowler", owner1.lastName, "when set");
const owner2 = defaultOwner();
owner2.lastName = "Parsons";
assert.equal("Parsons", owner1.lastName, "after change owner2"); // これでいい？

// defaultOwner.js...
let defaultData = {firstName: "Martin", lastName: "Fowler"};
export function defaultOwner() {return defaultData;}
export function setDefaultOwner(arg) {defaultData = arg;}
