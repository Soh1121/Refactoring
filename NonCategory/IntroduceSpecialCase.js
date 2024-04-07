// {
//     name: "Acme Boston",
//     location: "Malden MA",
//     // 場所についての詳細が続く
//     customer: {
//         name: "Acme Industries",
//         billingPlan: "plan-451",
//         paymentHistory: {
//             weeksDelinquentInLastYear: 7
//             // 更に続く
//         }
//     }
// }

// {
//     name: "Warehouse Unit 15",
//     location: "Malden MA",
//     // 場所についての詳細が続く
//     customer: "unknown",
// }

function isUnknown(aCustomer) {
    if (aCustomer === "unknown") return true;
    else return aCustomer.isUnknown;
}

// client1...
function client1()
{
    const rawSite = acquireSiteData();
    const site = enrichSite(rawSite);
    const aCustomer = site.customer;
    // ...大量のコードが入る...
    const customerName = aCustomer.name;

    function enrichSite(aSite) {
        const result = _.cloneDeep(aSite);
        const unknownCustomer = {
            isUnknown: true,
            name: "occupant",
            billingPlan: registry.billingPlans.basic,
        };

        if (isUnknown(result.customer)) result.customer = unknownCustomer;
        else result.customer.isUnknown = false;
        return result;
    }
}

// client2...
function client2()
{
    const plan = aCustomer.billingPlan;
}

// client 3...
const weeksDelinquent = (isUnknown(aCustomer)) ?
    0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;
