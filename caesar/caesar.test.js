const caesarTest = require('./caesar')

describe('XYZ!', function (){
    test('XYZ!', function (){
        expect(caesarTest('XYZ!', 3)).toEqual('ABC!')
    })
})
describe('ATTACKATONCE', function (){
    test('ATTACKATONCE', function (){
        expect(caesarTest('ATTACKATONCE', 4)).toEqual('EXXEGOEXSRGI')
    })
})
describe('ABCDEFGHIJKLMNOPQRSTUVWXYZ', function (){
    test('ABCDEFGHIJKLMNOPQRSTUVWXYZ', function (){
        expect(caesarTest('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 23)).toEqual('XYZABCDEFGHIJKLMNOPQRSTUVW')
    })
})
