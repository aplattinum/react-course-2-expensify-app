import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expense', () => {
    const expenses = []
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(0)
})

test('should add up a single expense', () => {
    const expense = [expenses[0]]
    const result = selectExpensesTotal(expense)
    expect(result).toBe(195)
})

test('should add up all expense in expense fixtures', () => {
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(114195)
})