import moment from 'moment';
//Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {

        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true; 
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
        const textMatch =  expense.description.toLowerCase().includes( text.toLowerCase() )
        //Each of the const above must evaluate to true in order for the data to pass through the filter
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        //newest to oldest 
        if (sortBy === 'date') {
            //return -1
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }

    });
};
