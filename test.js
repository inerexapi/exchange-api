const api = require("./api.js");

//1. Get Ticker
//Symbol = REX_ETH
/* api.getTicker('REX_ETH').then(res => { console.log(res, '\n') }); */
/* {
    "status":"ok",
    "ticker":[
        {
            "symbol":"REX_ETH",
            "24hrHigh":0.05,
            "last":0.0001,
            "24hrVol":0.2525,
            "ask":0.0001,
            "24hrLow":0.0001,
            "bid":0.0001
        }
    ],
    "timestamp":1537881682945
} */

//2. Get All Trade History
//Symbol = REX_ETH & depth = 2
//api.getTrade('REX_ETH', 2).then(res => { console.log(res, '\n') });
/* {
    "status":"ok",
    "trades":[
        {
            "tradeId":13,
            "take":"SELL",
            "price":0.0001,
            "quantity":10,
            "datetime":1537876687000
        },
        {
            "tradeId":12,
            "take":"SELL",
            "price":0.0001,
            "quantity":10,
            "datetime":1537876680000
        }
    ],
    "timestamp":1537882135971
}
 */
//3. create Order
/* let config = {
    "api_key": "xxx",
    "secret": "xxx",
    "price": 0.001000,
    "qty": 1,
    "type": "BUY",
    "symbol": "REX_ETH",
}
api.postOrderPlace(config).then(res => { console.log(res, '\n') }); */
/* {
    "status":"ok",
    "timestamp":1537882992676,
    "message":"Order has been placed.",
    "order_id":24,
    "type":"BUY"
} */
//4. Open Orders
/* let config = {
    "api_key": "xxx",
    "secret": "xxx",
    "symbol": "REX_ETH"
}
api.postOpenOrders(config).then(res => { console.log(res, '\n') });
{
    "status":"ok",
    "orders":[
        {
            "timestamp":1537876616000,
            "type":"BUY",
            "price":0.0001,
            "currency":"BTC",
            "units_filled":"5.00000000",
            "units_total":"10.00000000",
            "estimated_total":"0.00050000"
        },
        {
            "timestamp":1537880675000,
            "type":"BUY",
            "price":0.0001,
            "currency":"BTC",
            "units_filled":"0.00000000",
            "units_total":"10.00000000",
            "estimated_total":"0.00100000"
        },
        {
            "timestamp":1537882992000,
            "type":"BUY",
            "price":0.001,
            "currency":"BTC",
            "units_filled":"0.00000000",
            "units_total":"1.00000000",
            "estimated_total":"0.00100000"
        }
    ],
    "timestamp":1537883201960
} */
//5. Cancel Order
/*let config = {
    "api_key": "xxx",
    "secret": "xxx",
    "order_id": "22",
    "type": "BUY"
}
api.postCancel(config).then(res => { console.log(res, '\n') });
{
    "status":"ok",
    "timestamp":1537883532195,
    "message":"Order Cancelled Successfully."
} */

//6. Get Order Book
//symbol = REX_ETH
/* api.getOrderbook('REX_ETH').then(res => { console.log(res, '\n') });
{
    "status":"ok",
    "timestamp":1537883682151,
    "orders":[
        {
            "price":0.0001,
            "quantity":10,
            "volume":"0.00100000"
        },
        {
            "price":0.001,
            "quantity":1,
            "volume":"0.00100000"
        }
    ]
} */
//7. Get Balance
/* let config = {
    "api_key": "xxx",
    "secret": "xxx",
    "currency": "BCH"
}
api.postBalance(config).then(res => { console.log(res, '\n') });
{
    "status": "ok",
    "timestamp": 1538048795543,
    "balance": [
        {
            "available": "1000.00000000",
            "reserved": "0.00000000",
            "total": "1000.00000000"
        }
    ]
}*/
//8. Get Order Info
/* let config = {
    "api_key": "xxx",
    "secret": "xxx",
    "order_id": 12,
    "type": "BUY"
}
api.postInfo(config).then(res => { console.log(res, '\n') });
{
    "status":"ok",
    "timestamp":1537883934304,
    "orders":[
        {
            "date":1533820052000,
            "id":12,
            "price":15,
            "total_fee":0,
            "filled_quantity":1
        }
    ]
} */
//9. Get Symbols List
//api.getSymbol().then(res => { console.log(res, '\n') });
/* {
    "status":"ok",
    "symbol":[
        {
            "symbol": "ETH_BTC",
            "24hrHigh": null,
            "last": 15,
            "24hrVol": null,
            "ask": 0.1111,
            "24hrLow": null,
            "bid": 15
        }
    ],
    "timestamp":1537881682945
} */