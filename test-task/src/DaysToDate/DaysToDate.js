export default Date.prototype.daysTo = function(d2) {
    return Math.floor((d2 - this) / 86400000)
}
