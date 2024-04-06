class Site
{
    get customer() {return (this._customer === "unknown") ? new UnknownCustomer() : this._customer;}
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
    get name() {return "occupant";}
    get billingPlan() {return registry.billingPlans.basic;}
    set billingPlan(arg) { /* 何もしない */ }
    get paymentHistory() {return new NullPaymentHistorymentHistory();}
    get isUnknown() {return true;}
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear() {return 0;}
}

function isUnknown(arg) {
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
        throw new Error(`不正な値について要調査： <${arg}`);
    return arg.isUnknown;
}

// client 1...
function client1()
{
    const aCustomer = site.customer;
    // ... 大量のコードが入る ...
    let customerName = aCustomer.name;
    if (isUnknown(aCustomer)) customerName = "occupant";
    else customerName = aCustomer.name;
}

// client 2...
function client2()
{
    const plan = aCustomer.billingPlan;
}

// client 3...
function client3()
{
    aCustomer.billingPlan = newPlan;
}

// client 4...
function client4()
{
    const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}

// client...
function client()
{
    const name = aCustomer.isUnknown ? "unknown occupant" : aCustomer.name;
}
