
//Reducer recieves the action and objects (or arrays) from the action
//generator and defines what happens to the state object at the moment
// of being called.  
//EXPENSES REDUCER
const expensesReducerDefaultState = [];

export default (state= expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            //filters out the selected id to be removed.
            //any id that isnt the selected id to be removed will 
            //pass through the filter.
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            //finds the expense with the matching id.  Returns a new
            //object by spreading updates over the expense object -->
            //Rewriting any previous data and adding new data.
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, 
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        case 'SET_EXPENSES':
            return action.expenses
            
        default:
          return state;
    }
}

