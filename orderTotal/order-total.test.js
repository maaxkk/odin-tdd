const orderTotal = require('./order-total')


it('calls vatapi.com correctly if country code specified', () => {
    const fakeProcess = {
        env: {
            VAT_API_KEY: 'key123'
        }
    }
    const fakeFetch = (url, opts) => {
        expect(opts.headers.apikey).toBe('key123')
        expect(url).toBe('https://eu.vatapi.com/v2/vat-rate-check?rate_type=TBE&country_code=DE')
        return Promise.resolve({
            json: () => Promise.resolve({
                rates: {
                    standard: {
                        value: 19
                    }
                }
            })
        })
    }
    // const fakeFetch2 = jest.fn().mockReturnValue(Promise.resolve({
    //     json: () => Promise.resolve({
    //         rates: {
    //             standard: {
    //                 value: 19
    //             }
    //         }
    //     })
    // }))
    return orderTotal(fakeFetch,fakeProcess, {
        country: 'DE',
        items: [
            { 'name': 'Dragon waffles', price: 20, quantity: 2}
        ]
    }).then(result => {
        expect(result).toBe(20*2*1.19)
        expect(fakeFetch).toBeCalledWith('https://eu.vatapi.com/v2/vat-rate-check?rate_type=TBE&country_code=DE', {
            "headers": {"apikey": 'key123'}
        })
    })
})


it('Quantity', () => {
    orderTotal(null,  null, {
        items: [
            {name: 'Dragon candy', price: 2, quantity: 3},
        ]
    }).then(result => expect(result).toBe(6))
})

it('No quantity specified', () => {
    orderTotal(null, null, {
        items: [
            {name: 'Dragon candy', price: 3},
        ]
    }).then(result => expect(result).toBe(3))
})

it('Happy path (Example 1)', () => {
    orderTotal(null,null, {
        items: [
            {name: 'Dragon food', price: 8, quantity: 1},
            {name: 'Dragon cage (small)', price: 800, quantity: 1},
        ]
    }).then(result => expect(result).toBe(808))
})


it('Happy path (Example 2)', () => {
    orderTotal(null,null, {
        items: [
            {name: 'Dragon collar', price: 20, quantity: 1},
            {name: 'Dragon chew toy', price: 40, quantity: 1},
        ]
    }).then(result => expect(result).toBe(60))
})

