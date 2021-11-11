import OrderByTotal from "./OrderByTotal";

test('OrderByTotal create new sorted array with total', () => {
    const array = [
        {amount: 40000, quantity: 40},
        {amount: 20000, quantity: 20},
        {amount: 10000, quantity: 10},
        {amount: 30000, quantity: 30}
    ]
    const result = OrderByTotal(array)
    const defaultResult = [
        {amount: 10000, quantity: 10, total: 100000},
        {amount: 20000, quantity: 20, total: 400000},
        {amount: 30000, quantity: 30, total: 900000},
        {amount: 40000, quantity: 40, total: 1600000}
    ]
    expect(result).toEqual(defaultResult)
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
    OrderByTotal(inputArray)
    expect(inputArray).toEqual(array)
});