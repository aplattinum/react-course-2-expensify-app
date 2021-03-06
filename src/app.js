import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import configureStore from'./store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import {firebase} from './firebase/firebase';

const store = configureStore();
const jsx = (
    <Provider store= {store} >
        <AppRouter />
    </Provider>
);

const appRoot = document.getElementById('app');
let hasRendered = false;

const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, appRoot);
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, appRoot)



firebase.auth().onAuthStateChanged((user) => {
    if (user){
        console.log("uId: ", user.uid)
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        })

    } else {
        store.dispatch(logout())
        renderApp();
        history.push('/');
    }
})



//////   //           //\\   ///////////  ///////////
//   //  //          //  \\       ||           ||
/////    //         //    \\      ||           ||
//       //        // ==== \\     ||           ||
//       ///////  //        \\    ||           ||













