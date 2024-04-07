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
        name: "occupant",
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
        }
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
    const customerName = aCustomer.name;
}

// client 2...
function client2()
{
    const plan = aCustomer.billingPlan;
}

// client 3...
function client3()
{
    const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
