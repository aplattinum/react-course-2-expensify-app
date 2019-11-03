import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
import { underline } from 'ansi-colors';
import { act } from 'react-dom/test-utils';









//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch =  expense.description.toLowerCase().includes( text.toLowerCase() )
         

        //figure out if expenses.description has text variable string inside
        //includes() and convert both strings to lowercase
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        //newest to oldest 
        console.log(a.createdAt)
        console.log(b.createdAt)
        if (sortBy === 'date') {
            //return -1
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }

    });
};

//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 200, createdAt: -11000 }));
const expense2 = store.dispatch(addExpense({ description: 'care', amount: 300, note: 'Brand new lexus', createdAt: 1000 }));
// const expense3 = store.dispatch(addExpense({ description: 'food', amount: 3000, note:'soup' }));

// //Remove Expense
// store.dispatch(removeExpense( { id: expense1.expense.id}));
//Edit expense
//store.dispatch(editExpense( expense2.expense.id, { amount: 500, description: 'something elses' } ));

//
//store.dispatch(setTextFilter('car'))

store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate()); //date
//store.dispatch(setStartDate(-1000));
//store.dispatch(setEndDate(0))
// store.dispatch(setStartDate());//default should be undefined

// store.dispatch(setEndDate(1250));


const demoState = {
    expenses: [
        {
            id: 'sdfsdgsfdsf',
            description: 'January Rent',
            note: 'This was final payment for address',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        starteDate: undefined,
        endDate: undefined

    }
}
