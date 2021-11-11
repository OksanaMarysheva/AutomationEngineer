function DaysToDate(year, monthIndex, day, hours, minutes, seconds, milliseconds) {
    let x;
        switch (arguments.length) {
            case 0:
                x = new Date();
                break;
            case 1:
                x = new Date(year);
                break;
            case 2:
                x = new Date(year, monthIndex);
                break;
            case 3:
                x = new Date(year, monthIndex, day);
                break;
            case 4:
                x = new Date(year, monthIndex, day, hours);
                break;
            case 5:
                x = new Date(year, monthIndex, day, hours, minutes);
                break;
            case 6:
                x = new Date(year, monthIndex, day, hours, minutes, seconds);
                break;
            default:
                x = new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);
        }
        x.__proto__ = DaysToDate.prototype;
        return x;
    }

DaysToDate.prototype.__proto__ = Date.prototype;
DaysToDate.prototype.daysTo = function(secondDate) {
    return Math.round((secondDate - this) / 86400000);
}

export default DaysToDate
