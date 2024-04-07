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

// client1...
function client1()
{
    const rawSite = acquireSiteData();
    const site = enrichSite();
    const aCustomer = site.customer;
    // ...大量のコードが入る...
    let customerName;
    if (aCustomer === "unknown") customerName = "occupant";
    else customerName = aCustomer.name;

    function enrichSite(inputSite) {
        return _.cloneDeep(inputSite);
    }
}

// client2...
function client2()
{
    const plan = (aCustomer === "unknown") ?
        registry.billingPlans.basic
        : aCustomer.billingPlan;
}

// client 3...
const weeksDelinquent = (aCustomer === "unknown") ?
    0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;
