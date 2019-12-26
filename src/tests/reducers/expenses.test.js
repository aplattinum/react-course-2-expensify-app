import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer( undefined, { type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expoense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove expense that isnt in list', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '32408234'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

//should add an expense
test('should add an expense', () => {
    const expense = {
        description: 'new expense',
        id: '4',
        note: 'lil note',
        amount: 169,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual( [...expenses, expense])
})

// should edit and expense
test('should edit expense', () => {
    const amount = {
        amount: 12000
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }

    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)
})
// should not edit expense if id not found
test('should not edit expense if id not found', () => {
    const amount = {
        amount: 6969
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '234234',
        updates: {
            amount
        }

    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]]);
})