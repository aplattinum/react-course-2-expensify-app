import ExpenseListItem from '../../components/ExpenseListItem';
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('Render expenseListItem with fixtures data', () => {
    const wrapper = shallow(<ExpenseListItem { ...expenses[0] }/>)
    expect(wrapper).toMatchSnapshot();
})
