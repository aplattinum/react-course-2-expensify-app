import uuid from 'uuid';

//---ACTIONS---//
//-------------//
//send the objects, arrays, or new data to the reducers to be processed there

//ADD_EXPENSE - adds a new object on to the array of objects
export const addExpense = (
    { description = '',
      note = '', 
      amount = 0, 
      createdAt= 0 
    } 
    = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE - sends the id as string { id } --> pulls id out from expenses
export const removeExpense = ({ id }= {}) => ( { 
    type: 'REMOVE_EXPENSE',
    id
});

//Edit Expense - sends id object and updates object
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});