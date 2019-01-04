const util = require("./util.js");
const MARKET_URL = require("./util.js").MARKET_URL;
const TRADE_URL = MARKET_URL;

const httpGetNosign = require("./util.js").httpGetNosign;
const httpPostSign = require("./util.js").httpPostSign;

/**
 * Get all symbols
 * @param {string} symbol - Required, for all or transaction pair code: BCH_BTC
 */
function getSymbol() {
    let url = MARKET_URL + "get-symbol";
    return httpGetNosign(url);
}


/**
 * Get the latest price
 * @param {string} symbol - Required, for all or transaction pair code: BCH_BTC
 */
function getTicker(symbol) {
    let url = MARKET_URL + "get-ticker?symbol=" + symbol;
    return httpGetNosign(url);
}

/**
 * Get pending order
 * @param {string} symbol - Required, for all or transaction pair code: BCH_BTC
 */
function getOrderbook(symbol) {
    let url = MARKET_URL + "get-order-book?symbol=" + symbol;
    return httpGetNosign(url);
}

/**
 * 
 * @param {string} symbol - Required, for all or transaction pair code: BCH_BTC
 * @param {number|string} [size = 300] - Get the number of records. The default is 300
 */
function getTrade(symbol, size = 300) {
    let url = MARKET_URL + "get-trade?symbol=" + symbol + "&size=" + size
    return httpGetNosign(url)
}

/**
 * Check account balance
 * @param {Object} config - Pass the argument in the form of a dictionary
 * api_key: Can apply at exchange，
 * secret: Personal key (do not disclose it to others)
 * currency: currency。
 * 
 * @param {string} config.api_key
 * @param {string} config.secret
 * @param {string|number} config.currency
 * 
 */
function postBalance(config) {
    url = TRADE_URL + "get-balance"
    return httpPostSign(url, config)
}

/**
 * Place Order
 * @param {Object} config - Pass the argument in the form of a dictionary.
 * api_key: Can apply at exchange，
 * secret: Personal key (do not disclose it to others)
 * type: BUY / SELL
 * price: Purchase unit price
 * qty: Purchase quantity
 * symbol: Symbol
 * @param {string} config.api_key
 * @param {string} config.secret
 * @param {string} config.type
 * @param {string|number} config.price
 * @param {string|number} config.qty
 * @param {string|number} config.symbol
 */
function postOrderPlace(config) {
    url = TRADE_URL + "create-order"
    return httpPostSign(url, config)
}

/**
 * Get Order info
 * @param {Object} config - Pass the argument in the form of a dictionary.
 * api_key: Can apply at exchange，
 * secret: Personal key (do not disclose it to others)
 * order_id: id (string)
 * type: BUY / SELL
 * 
 * @param {string} config.api_key
 * @param {string} config.secret
 * @param {string} config.order_id
 * @param {string} config.type
 * 
 */
function postInfo(config) {
    url = TRADE_URL + "order-info"
    return httpPostSign(url, config)
}


/**
 * Get all open orders
 * @param {Object} config - Pass the argument in the form of a dictionary.
 * api_key: Can apply at exchange，
 * secret: Personal key (do not disclose it to others)
 * symbol: Transaction to code: BCH_BTC
 * 
 * @param {string} config.api_key
 * @param {string} config.secret
 * @param {string} config.symbol
 * 
 */
function postOpenOrders(config) {
    url = TRADE_URL + "open-orders"
    return httpPostSign(url, config)
}

/**
 * Cancel Order
  * @param {Object} config - Pass the argument in the form of a dictionary.
 * api_key: Can apply at exchange，
 * secret: Personal key (do not disclose it to others)
 * order_id: id (string)
 * type: BUY / SELL
 * 
 * @param {string} config.api_key
 * @param {string} config.secret
 * @param {string} config.order_id
 * @param {string} config.type
 * 
 */
function postCancel(config) {
    url = TRADE_URL + "cancel-order"
    return httpPostSign(url, config)
}

exports.getOrderbook = getOrderbook;
exports.getSymbol = getSymbol;
exports.getTicker = getTicker;
exports.getTrade = getTrade;
exports.postBalance = postBalance;
exports.postInfo = postInfo;
exports.postOpenOrders = postOpenOrders;
exports.postOrderPlace = postOrderPlace;
exports.postCancel = postCancel;
