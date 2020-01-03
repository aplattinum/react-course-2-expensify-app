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
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '',
            note = '', 
            amount = 0, 
            createdAt= 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt }
        
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

//REMOVE_EXPENSE - sends the id as string { id } --> pulls id out from expenses
export const removeExpense = ({ id } = {}) => ( { 
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}))
        })
        
    }
}

//Edit Expense - sends id object and updates object
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}

//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).once("value").then((snapshot) => {
                const expenses = []
                
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                }) 
            })
            dispatch(setExpenses(expenses))
        })  
    }
}