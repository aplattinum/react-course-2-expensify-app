import {setStartDate, 
    setEndDate, 
    sortByAmount, 
    sortByDate, 
    setTextFilter 
} from '../../actions/filters';
import moment from 'moment';


test("Test should generate set start date actoion object", () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test("Set end date action object", () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test("Should generate sort by amount action object", () => {
    const action = sortByAmount('amount')
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test("Should generate sort by date action object", () => {
    const action = sortByDate('date')
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test("Should set text filter to test", () => {
    const action = setTextFilter('test')
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: 'test'
       

    })
})
test("Should set text filter to default empty", () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: ''
       

    })
})