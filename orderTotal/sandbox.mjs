import fetch from 'node-fetch';

const orderTotal = require('./order-total')

const result = orderTotal(fetch, {
    country: 'DE',
    items: [
        {'name': 'Dragon waffles', price: 20, quantity: 2}
    ]
})


