import DaysToDate from "./DaysToDate";

test('DaysToDate create new Date', () => {
    const date = new DaysToDate(2021, 10, 8)
    const defaultDate = new Date(2021, 10, 8)
    expect(date).toEqual(defaultDate)
});

test('quantity of days between dates', () => {
    const firstDate = new DaysToDate(2021, 10, 8)
    const secondDate = new DaysToDate(2021, 10, 10)
    const difference = firstDate.daysTo(secondDate)
    expect(difference).toBe(2)
});