function analyzeArray(numsArr){
    let max = numsArr[0]
    let min = numsArr[0]
    let sum = 0
    for (let i = 0; i < numsArr.length; i++) {
        if (typeof numsArr[i] !== 'number'){
            return `Please provide valid array`
        }
        if (numsArr[i] < min) min = numsArr[i];
        if (numsArr[i] > max) max = numsArr[i];
        sum += numsArr[i]
    }
    const average = Math.floor(sum / numsArr.length)
    return {
        'average': average,
        'min': min,
        'max': max,
        'length': numsArr.length,
    }
}

module.exports = analyzeArray