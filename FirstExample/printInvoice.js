function statement(invoice, plays) {
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performance = invoice.performances.map(enrichPerformance);
    return renderPlainText(statementData, plays);

    function enrichPerformance(aPerformance) {
        const result = Object.assign({}, aPerformance);
        result.play = playFor(result);
        return result;
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }
}

function renderPlainText(data, plays) {
    let result = `Statement for ${data.customer}\n`;
    for (let perf of data.performances) {
        // 注文の内訳を出力
        result += ` ${pref.play.name}: ${usd(amountFor(pref))} (${perf.audience} seats)\n`;
    }
    result += `Amount owed is ${usd(totalAmount())}\n`;
    result += `You earned ${totalVolumeCredits()} credits\n`;
    return result;

    function totalAmount() {
        let result = 0;
        for (let perf of data.performances) {
            // 注文の内訳を出力
            result += amountFor(pref);
        }
        return result;
    }

    function totalVolumeCredits() {
        let result = 0;
        for (let perf of data.performances) {
            result = volumeCreditsFor(pref);
        }
        return result;
    }

    function usd(aNumber) {
        return new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD",
                minimumFractionDigits: 2}).format(aNumber / 100);
    }

    function volumeCreditsFor(aPerformance) {
        let result = 0;
        result += Math.max(aPerformance.audience - 30, 0);
        if ("comedy" === aPerformance.play.type) result += Math.floor(aPerformance.audience / 5);
        return result;
    }

    function amountFor(aPerformance) {
        let result = 0;
        switch (aPerformance.play.type) {
        case "tragedy":
            result = 40000;
            if (aPerformance.audience > 30) {
                result += 1000 * (perf.audience - 30);
            }
            break;
        case "comedy":
            result = 30000;
            if (aPerformance.audience > 20) {
                result += 10000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
        default:
            throw new Error(`unknown type: ${aPerformance.play.type}`);
        }
        return result;
    }
}
