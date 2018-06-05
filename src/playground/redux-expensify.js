import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

console.log('running redux-expensify.js');

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
const setFilterText = (text = '') => ({
    type: 'SET_TEXT',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
const setStartDate = (newDate = undefined) => ({
    type: 'SET_START_DATE',
    newDate
});
const setEndDate = (newDate = undefined) => ({
    type: 'SET_END_DATE',
    newDate
});



const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => (id !== action.id   ));
        case 'EDIT_EXPENSE': 
            return state.map((expense) => {
                if(expense.id === action.id){
                    //override existing expense info with whatever updates were passed in
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    //just return the unchanged expense 
                    return expense;
                }
            });
        default:
            return state;
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.newDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.newDate
            }
        default:
            return state;
    }
};

//apply filtering then sorting 
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1; 
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}



const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const a1 = store.dispatch(addExpense({
    description: 'Rent',
    amount: 40000,
    createdAt: 1000
}));

const a2 = store.dispatch(addExpense({
    description: 'Pizza',
    amount: 2000,
    createdAt: 2000
}));

const a3 = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 300,
    createdAt: -1000
})); 

// store.dispatch(removeExpense({ id: a1.expense.id }));
// store.dispatch(editExpense(a2.expense.id,{ amount: 1500 }));

// store.dispatch(setFilterText('Rent'));
// store.dispatch(setFilterText());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(3000));

const demoState = {
    expenses: [{
        id: 'fljdslaalskd',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

