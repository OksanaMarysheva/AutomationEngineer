import OrderByTotal from "./OrderByTotal";

test('OrderByTotal create new ascending sorted array with Total', () => {
    const array = [
        {amount: 40000, quantity: 40},
        {amount: 20000, quantity: 20},
        {amount: 10000, quantity: 10},
        {amount: 30000, quantity: 30}
    ]
    const result = OrderByTotal(array, 'ascending')
    const defaultResult = [
        {amount: 10000, quantity: 10, Total: 100000},
        {amount: 20000, quantity: 20, Total: 400000},
        {amount: 30000, quantity: 30, Total: 900000},
        {amount: 40000, quantity: 40, Total: 1600000}
    ]
    expect(result).toEqual(defaultResult)
});

test('OrderByTotal create new descending sorted array with Total', () => {
    const array = [
        {amount: 40000, quantity: 40},
        {amount: 20000, quantity: 20},
        {amount: 10000, quantity: 10},
        {amount: 30000, quantity: 30}
    ]
    const result = OrderByTotal(array, 'descending')
    const defaultResult = [
        {amount: 40000, quantity: 40, Total: 1600000},
        {amount: 30000, quantity: 30, Total: 900000},
        {amount: 20000, quantity: 20, Total: 400000},
        {amount: 10000, quantity: 10, Total: 100000}
    ]
    expect(result).toEqual(defaultResult)
});

test('OrderByTotal', () => {
    const array = [
        {amount: 40000, quantity: 40},
        {amount: 20000, quantity: 20},
        {amount: 10000, quantity: 10},
        {amount: 30000, quantity: 30}
    ]
    const result = OrderByTotal(array)
    const defaultResult = [
        {amount: 40000, quantity: 40, Total: 1600000},
        {amount: 30000, quantity: 30, Total: 900000},
        {amount: 20000, quantity: 20, Total: 400000},
        {amount: 10000, quantity: 10, Total: 100000}
    ]
    expect(result).toBeUndefined()
});


test('OrderByTotal don`t changed inputArray', () => {
    const array = [
        {amount: 40000, quantity: 40},
        {amount: 20000, quantity: 20},
        {amount: 10000, quantity: 10},
        {amount: 30000, quantity: 30}
    ]
    const inputArray = [
        {amount: 40000, quantity: 40},
        {amount: 20000, quantity: 20},
        {amount: 10000, quantity: 10},
        {amount: 30000, quantity: 30}
    ]
    OrderByTotal(inputArray, 'ascending')
    expect(inputArray).toEqual(array)
});
