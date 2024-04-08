
const calculator = {
    add(a, b){
        return a+b
    },
    subtract(a, b){
        return a-b
    },
    multi(a, b){
        return a*b
    },
    divide(a, b){
        return Math.floor((a/b) * 100) / 100
    },

}


module.exports = calculator