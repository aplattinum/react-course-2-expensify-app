import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';


// Action generators - functions that return action objects 
// const incrementCount = ( {incrementBy = 1} = {}) => ({
//     type: 'INCREMENT',
//     incrementBy
// });

// const decrementCount = ( { decrementBy = 1} = {}) => ({
//     type: 'DECREMENT',
//     decrementBy
// });

// const resetCount = () => ({
//     type: 'RESET'
// })
// const setCount = ( { setCount = 0 } = {}) => ({
//     type: 'SET',
//     setCount
// }) 

// // //Reducers - Specifty how the states changes in response to some actions
// // // 1. Reduced are pure functions - only determined by things that get passed in
// // // 2. Never change state or action
// const countReducer  = (state= {count: 0}, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//           return {
//             count: state.count + action.incrementBy
//           };
//         case 'DECREMENT':
//           return {
//               count: state.count - action.decrementBy
//           };
//         case 'RESET':
//           return {
//               count: 0
//           };
//         case 'SET':
//           return {
//             count: action.setCount
//             }
//         default:
//           return state;
//     }  
// };



// const store = createStore(countReducer)
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch(incrementCount({incrementBy:15}))
// store.dispatch(decrementCount({decrementBy:5}))
// store.dispatch(resetCount({}))
// store.dispatch(setCount({setCount:100}))


// class CounterApp extends React.Component {
//     state = {
//         count: 0
//     }
//     incrementCountFunc() { ( {incrementBy = 1} = {}) => ({
//                 type: 'INCREMENT',
//                 incrementBy
//                 }            
//             );     
//         };
            

//     decrementCount = ( { decrementBy = 1} = {}) => ({
//     type: 'DECREMENT',
//     decrementBy
//     });

//     resetCount = () => ({
//     type: 'RESET'
//     })
//     setCount = ( { setCount = 0 } = {}) => ({
//     type: 'SET',
//     setCount
//     }) 

//     render() {
//         return (
//             <div>
//               <h1>Counter App</h1>
//               <h2>Count: {this.state.count}</h2>
//               <button onClick={store.dispatch(incrementCount)}> + 1 </button>
//             </div>
//         )
        
//     }
    
    

// }

// const appRoot = document.getElementById('app');
// ReactDOM.render(< CounterApp/>, appRoot)

console.log('Arrays practice')

const expenses = [ {
                    id: "0370a6c8-08e2-428b-b3be-3c39fef5450c", 
                    description: "rent", 
                    note: "", 
                    amount: 100, 
                    createdAt: 0
                  },
                   {
                    id: "46a05b57-3f60-43ef-81dd-da83dabf8f92", 
                    description: "care", 
                    note: "Brand new lexus", 
                    amount: 5100, 
                    createdAt: 0
                  },
                  {
                    id: "166f8329-8931-4e57-adff-9391369a7d04", 
                    description: "food", 
                    note: "soup", 
                    amount: 3000, 
                    createdAt: 0
                  }
                ]

//console.log(expenses)

const [expense1, expense2, expense3] = expenses
const { id } = expense1
//console.log(id)

//const list = expenses.map((expense) => console.log(expense.id))

// const newList = expenses.filter((object) => { 
//  if (id !== object.id) {
//    return {
//      ...object,
//      amount: 500
//    } 
//  }
// })

console.log({...expense1, amount: 500}, {...expense2, description: 'something else'})