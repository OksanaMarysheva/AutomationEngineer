function OrderByTotal(array) {
    const newArray = array.map(a => Object.assign({}, a))
    newArray.map(a => a.total = a.amount * a.quantity)

    newArray.sort(function (a, b) {
        if (a.total > b.total) {
            return 1;
        }
        if (a.total < b.total) {
            return -1;
        }
        return 0;
    });
    return newArray
}

export default OrderByTotal
