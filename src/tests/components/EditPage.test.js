import React from 'react';
import { shallow } from 'enzyme';
import { EditPage } from '../../components/EditPage';
import expenses from '../fixtures/expenses';

let  startEditExpense, startRemoveExpense, wrapper, history;

beforeEach( () => {
    startEditExpense = jest.fn();
    startRemoveExpense= jest.fn();
    history= { push: jest.fn() }
    wrapper = shallow(<EditPage 
        startEditExpense={startEditExpense} 
        startRemoveExpense={startRemoveExpense} 
        history={history}
        expense={expenses[2]}
        />
    )
})

test('should render editPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle editExpense (onSubmit) (spies)', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])

})

test('should handle removeExpense (onClick) (spies)', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ 
        id: expenses[2].id 
    })
})