function orderTotal(fetch, process, order){
    const sumOrderItems = order =>
        order.items.reduce((acc, curr) => acc + curr.price * (curr.quantity || 1) , 0)
    if (order.country) {
        return fetch(`https://eu.vatapi.com/v2/vat-rate-check?rate_type=TBE&country_code=${order.country}`, {
            headers: {
                apikey: 'key123'
            }
        })
            .then(response => response.json())
            .then(data => data.rates.standard.value)
            .then(vat => sumOrderItems(order) * (1 + vat / 100))
    }
    return Promise.resolve(sumOrderItems(order))
}

module.exports = orderTotal
