const capitalize = require('./capitalize')

describe('capitalize first letter', function (){
    test('says "hello World!"', function (){
        expect(capitalize('hello World!')).toEqual('Hello World!')
    })
})

describe('works with empty string', function (){
    test('accepts empty string', function (){
        expect(capitalize('')).toEqual('')
    })
})
