import React from 'react';
import filteredExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import {connect} from 'react-redux';
import numeral from 'numeral';

//mapStateToProps --> uses expenses filter to get 
//the filtered expenses

//use expenses.length to get the number of expenses
//us expensesTotal(expenses) to get the total

export const ExpensesSummary = ({expenses}) => {
    const expenseLength = expenses.length
    const expenseWord = expenses.length === 1 ? " expense " : " expenses " 
    const expensesTotalFormatted = numeral(expensesTotal(expenses) / 100).format('$0,0.00')
    return (
    <div>
        <h1>Viewing {expenseLength} {expenseWord} totalling {expensesTotalFormatted} </h1>
    </div>
    )
        }
    


const mapStateToProps = (state) => ({
    expenses: filteredExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpensesSummary)

