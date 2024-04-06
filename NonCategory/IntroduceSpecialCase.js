class Site
{
    get customer() {return this._customer;}
}

class Customer
{
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {return false;}
}

class UnknownCustomer {
    get isUnknown() {return true;}
}

function isUnknown(arg) {
    if (!(arg instanceof Customer) || (arg === "unknown"))
        throw new Error(`不正な値について要調査： <${arg}`);
    return (arg === "unkown");
}

// client 1...
function client1()
{
    const aCustomer = site.customer;
    // ... 大量のコードが入る ...
    let customerName;
    if (aCustomer === "unknown") customerName = "occupant";
    else customerName = aCustomer.name;
}

// client 2...
function client2()
{
    const plan = (aCustomer === "unknown") ?
        registry.billingPlans.basic
        : aCustomer.billingPlan;
}

// client 3...
function client3()
{
    if (aCustomer === "unknown") aCustomer.billingPlan = newPlan;
}

// client 4...
function client4()
{
    const weeksDelinquent = (aCustomer === "unknown") ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
