import uuid from 'uuid';
import database from '../firebase/firebase';
//Standard Redux Store Update Process

//Component calls action generator
//action generator returns object
//component dispatched object
//redux store changes


//ASYNC ACTIONS PROCESS --> Redux - thunk

//Component calls action generator
//action generator returns function
// component dispatches function
// function runs (has ability to dispatch other actions and do whatever it wants)




//---ACTIONS---//
//-------------//
//send the objects, arrays, or new data to the reducers to be processed there

//ADD_EXPENSE - adds a new object on to the array of objects
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '', 
            amount = 0, 
            createdAt= 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt }
        
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

//REMOVE_EXPENSE - sends the id as string { id } --> pulls id out from expenses
export const removeExpense = ({ id }= {}) => ( { 
    type: 'REMOVE_EXPENSE',
    id
});

//export const startRemoveExpense

//Edit Expense - sends id object and updates object
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});