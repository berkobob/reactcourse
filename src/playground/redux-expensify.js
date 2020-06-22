import { sortByAmount } from '../actions/filters';
import { getVisibleExpenses } from '../selectors/expenses';
import { store } from '../store/configureStore';


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const e1 = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const e2 = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: e1.expense.id }));
// store.dispatch(editExpense(e2.expense.id, { amount: 500 }));


// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2000));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: '123',
        description: 'Jan rent',
        note: 'This is where notes go',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

