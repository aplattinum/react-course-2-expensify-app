import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment'; 
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter} 
            sortByDate={sortByDate} 
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

// should handle text change
test('should handle text changes', () => {
    const value = "rest"
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

// should sortByDate
test('should sortByDate', () => {
    const value = "date"
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', { 
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})
//Should sortByaMount
test('should sortByAmmount', () => {
    const value = "amount"
    wrapper.find('select').simulate('change', { 
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled()
})
//Should handle Date changes
test('should handle date change', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})
//should handle date focus changes
test('should hanfle date focus changes', () => {
    const calendarFocused =  'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})