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













