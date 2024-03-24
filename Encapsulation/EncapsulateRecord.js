/**
 * "1920": {
 *      name: "martin",
 *      id: "1920",
 *      usage: {
 *          "2016": {
 *              "1": 50,
 *              "2": 55,
 *              // 3月分以降は省略
 *          },
 *          "2015": {
 *              "1": 70,
 *              "2": 63,
 *              // 3月分以降は省略
 *          }
 *      }
 * },
 * "38673": {
 *      name: "neal",
 *      id: "38673",
 *      // 同様に顧客情報が続く
 * }
 */

// sample update...
customerData[customerID].usages[year][month] = amount;

// sample read
function compareUsage (customerID, laterYear, month) {
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later -earlier};    // 前年同月比較
}
