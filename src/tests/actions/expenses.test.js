import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test("should set up remove expense action object", () => {
    const action = removeExpense({id: "123abc"});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "123abc"
    })
})

test("Should set up editExpense Action obejct", () => {
    const action = editExpense("abc123", {note: "new note"})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: "new note"
        }
    })
})

test('Should set up Add Expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })

});

test('Should set up the add expense action object with default vaulues', () => {

    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0

    }})
})