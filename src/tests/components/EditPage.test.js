import React from 'react';
import { shallow } from 'enzyme';
import { EditPage } from '../../components/EditPage';
import expenses from '../fixtures/expenses';

let  editExpense, removeExpense, wrapper, history;

beforeEach( () => {
    editExpense = jest.fn();
    removeExpense= jest.fn();
    history= { push: jest.fn() }
    wrapper = shallow(<EditPage 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
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
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])

})

test('should handle removeExpense (onClick) (spies)', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ 
        id: expenses[2].id 
    })
})