import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense, editExpense, removeExpense} from './actions/expenses';
import { setTextFilter, 
        sortByDate,
        sortByAmount,
        setStartDate,
        setEndDate
        } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import configureStore from'./store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

//addexpense -> water bill , gas bill
//set text filter -> bill
//getvisibleexpense -> print to screen

store.dispatch(addExpense({ description: 'water bill', note: 'october', amount: 4500, createdAt: 500}))
store.dispatch(addExpense({ description: 'gas bill', note: 'october', createdAt: 1000}))
store.dispatch(addExpense({ description: 'rent', note: 'october', amount: 109500}))

//Show unfiltered state
//console.log(store.getState())

//Show filtered state
//store.dispatch(setTextFilter('bill'))
//const state = store.getState()
//console.log(getVisibleExpenses(state.expenses, state.filters))

// setTimeout(() => {
//     store.dispatch(setTextFilter('rent'))
// }, 3000)


// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
//   });

const jsx = (
    <Provider store= {store} >
    <AppRouter />
    </Provider>
);


const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot)


//////   //           //\\   ///////////  ///////////
//   //  //          //  \\       ||           ||
/////    //         //    \\      ||           ||
//       //        // ==== \\     ||           ||
//       ///////  //        \\    ||           ||













