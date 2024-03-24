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
getCustomerData().setUsage(customerID, year, month, amount);

// sample read
function compareUsage (customerID, laterYear, month) {
    const later = getCustomerData().rawData[customerID].usages[laterYear][month];
    const earlier = getCustomerData().rawData[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later -earlier};    // 前年同月比較
}

function getRawDataOfCustomers() {return customerData.rawData;}
function setRawDataOfCustomers(arg) {customerData = new customerData(arg);}
function setUsage(customerID, year, month, amount) {
    getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}

class customerData {
    constructor(data) {
        this._data = data;
    }

    setUsage(customerID, year, month, amount) {
        this._data[customerID].usages[year][month] = amount;
    }

    get rawData() {
        return _.cloneDeep(this._data);
    }
}

function getCustomerData() {return customerData;}
