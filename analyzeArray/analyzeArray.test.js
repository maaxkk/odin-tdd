const analyzeArray = require("../analyzeArray/analyzeArray");

const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
}

const object2 = {
    average: 22,
    min: -50,
    max: 100,
    length: 6
}

describe('return object from array', function (){
    test('[1,8,3,4,2,6]', function (){
        expect(analyzeArray([1,8,3,4,2,6])).toEqual(object)
    })
})

describe('return object from array', function (){
    test('[10,80,35,-40,-50,100]', function (){
        expect(analyzeArray([10,80,35,-40,-50,100])).toEqual(object2)
    })
})

describe('returns if array does not contains numbers', function (){
    test('[10,test,hello,world,-50,100]', function (){
        expect(analyzeArray([10,'test','hello','world',-50,100])).toEqual('Please provide valid array')
    })
})