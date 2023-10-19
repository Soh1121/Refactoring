function statement (invoice, plays) {
    function amountFor(pref, play) {
        let result = 0;
        switch (play.type) {
        case "tragedy":
            result = 40000;
            if (pref.audience > 30) {
                result += 1000 * (perf.audience - 30);
            }
            break;
        case "comedy":
            result = 30000;
            if (pref.audience > 20) {
                result += 10000 + 500 * (pref.audience - 20);
            }
            result += 300 * pref.audience;
            break;
        default:
            throw new Error(`unknown type: ${play.type}`);
        }
        return result;
    }

    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat("en-US",
        { style: "currency", currency: "USD",
                  minimumFractionDigits: 2}).format;

    for (let perf of invoice.performances) {
        const play = plays[pref.playID];
        let thisAmount = amountFor(pref, play);

        // ボリューム特典のポイントを加算
        volumeCredits += Math.max(pref.audience - 30, 0);
        // 喜劇の時は10人につき、さらにポイントを加算
        if ("comedy" === play.type) volumeCredits += Math.floor(pref.audience / 5);
        // 注文の内訳を出力
        result += ` ${play.name}: ${format(thisAmount/100)} (${perf.audience} seats)\n`;
        totalAmount += thisAmount;
    }
    result += `Amount owed is ${format(totalAmount/100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
}
