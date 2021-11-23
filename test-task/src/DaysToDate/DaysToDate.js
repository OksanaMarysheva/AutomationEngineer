export default Date.prototype.daysTo = function(d2) {
    let computation = (d2 - this) / 86400000
    let res
    if (computation > 0) {
        res = Math.floor(computation)
    } else if (computation < 0) {
        res = Math.abs(Math.ceil(computation))
    } else if (computation === 0) {
        res = 0
    } else {
        res = 'Something go wrong, please try again'
    }
    return res
}
