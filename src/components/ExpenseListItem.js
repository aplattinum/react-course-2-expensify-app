//Export stateless functional component
//render description, amount, created at
import React from 'react';

import { Link } from 'react-router-dom';

const ExpenseListItem = ( {description, amount, createdAt, id, dispatch}) => (
    <div>
        <Link
        to={`/edit/${id}`}
        
        ><h3>{description}</h3></Link>
        <p>Amount: {amount} - Created On:{createdAt}</p>
        
    </div>
)

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses
//     }
// }

export default ExpenseListItem

