//Export stateless functional component
//render description, amount, created at
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ExpenseListItem = ( {description, amount, createdAt, id, dispatch}) => (
    <div>
        <Link
        to={`/edit/${id}`}
        
        ><h3>{description}</h3></Link>
        <p>
        {numeral(amount / 100).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM Do, YYYY')}
        
        </p>
        
    </div>
)

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses
//     }
// }

export default ExpenseListItem

