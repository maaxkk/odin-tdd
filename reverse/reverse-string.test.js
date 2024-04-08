const reverseString = require('./reverse-string')

describe('reverse string (1)', function (){
    test('says 12345678', function (){
        expect(reverseString('123 456 78')).toEqual('87 654 321')
    })
})

describe('reverse string (2)', function (){
    test('says 12345678', function (){
        expect(reverseString('abc def gh')).toEqual('hg fed cba')
    })
})

describe('reverse string (2)', function (){
    test('empty', function (){
        expect(reverseString('')).toEqual('')
    })
})

