import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('should return zero if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});
test('should return correct single price if only one expense', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});
test('should return correct sum of prices if given array of more than one expense', () => {
    const correctTotal = expenses[0].amount + expenses[1].amount + expenses[2].amount;
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(correctTotal);
});

