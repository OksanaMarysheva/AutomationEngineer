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

    if (sortingType === 'descending' || sortingType === 'ascending') {
        return newArray
    }

    return 'Wrong or absent second argument. Please write correct second argument'
}

export default OrderByTotal
