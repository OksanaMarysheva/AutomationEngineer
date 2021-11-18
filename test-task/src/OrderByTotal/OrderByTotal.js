function OrderByTotal(array, sortingType) {
    const newArray = array.map(a => Object.assign({}, a))
    newArray.map(a => a.Total = a.amount * a.quantity)

    if (sortingType === 'ascending') {
        newArray.sort(function(a, b){
            return (a.Total === b.Total ? 0 : (a.Total < b.Total ? -1 : 1))
        })
    }

    if (sortingType === 'descending') {
        newArray.sort(function (a, b) {
            return (a.Total === b.Total ? 0 : (a.Total > b.Total ? -1 : 1))
        })
    }

    if (sortingType) {
        return newArray
    }
}

export default OrderByTotal
