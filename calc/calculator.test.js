const calculator = require('./calculator')

describe('add', function (){
    test('add numbers', function (){
        expect(calculator.add(5, 6)).toEqual(11)
    })
})
describe('subtract', function (){
    test('subtract', function (){
        expect(calculator.subtract(5, 6)).toEqual(-1)
    })
})
describe('multiply', function (){
    test('multiply numbers', function (){
        expect(calculator.multi(5, 6)).toEqual(30)
    })
})
describe('divide', function (){
    test('divide numbers', function (){
        expect(calculator.divide(5, 6)).toEqual(0.83)
    })
})
