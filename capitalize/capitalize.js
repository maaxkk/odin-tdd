function capitalize(str){
    if (str.length > 0) {
        return str[0].toUpperCase() + str.slice(1)
    }
    return str
}

module.exports = capitalize