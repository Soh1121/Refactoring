class Site
{
    get customer() {
        return (this._customer === "unknown") ? createUnknownCustomer() : this._customer;
    }
}

class Customer
{
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
    get isUnknown() {return false;}
}

function createUnknownCustomer() {
    return {
        isUnknown: true,
    };
}

function isUnknown(arg) {
    return arg.isUnknown;
}

// client 1...
function client1()
{
    const aCustomer = site.customer;
    // ... 大量のコードが入る ...
    let customerName;
    if (isUnknown(aCustomer)) customerName = "occupant";
    else customerName = aCustomer.name;
}

// client 2...
function client2()
{
    const plan = (isUnknown(aCustomer)) ?
        registry.billingPlans.basic
        : aCustomer.billingPlan;
}

// client 3...
function client3()
{
    const weeksDelinquent = (isUnknown(aCustomer)) ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
