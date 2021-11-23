import * as daysTo from './DaysToDate'

test('quantity of days between dates', () => {
    const d1 = new Date(2021, 10, 8)
    const d2 = new Date(2021, 10, 10)
    const difference = d1.daysTo(d2)
    expect(difference).toBe(2)
});

test('quantity of days d1-d2 between dates with hours', () => {
    const d1 = new Date(2021, 10, 8, 5)
    const d2 = new Date(2021, 10, 10)
    const difference = d1.daysTo(d2)
    expect(difference).toBe(1)
});

test('quantity of days d2-d1 between dates with hours', () => {
    const d2 = new Date(2021, 10, 8, 5)
    const d1 = new Date(2021, 10, 10)
    const difference = d1.daysTo(d2)
    expect(difference).toBe(1)
});

test('quantity of days between dates with minutes', () => {
    const d1 = new Date(2021, 10, 14, 0, 1)
    const d2 = new Date(2021, 10, 17)
    const difference = d1.daysTo(d2)
    expect(difference).toBe(2)
});

test('quantity of days between dates with minutes must be 0', () => {
    const d1 = new Date(2021, 10, 16, 0, 1)
    const d2 = new Date(2021, 10, 17)
    const difference = d1.daysTo(d2)
    expect(difference).toBe(0)
});
