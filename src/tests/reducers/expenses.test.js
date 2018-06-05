import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});
test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const newExpense = {
        description: 'Milk',
        amount: 500,
        note: '',
        createdAt: moment().valueOf()
    };
    const state = expensesReducer(expenses,{ 
        type:'ADD_EXPENSE',
        expense: newExpense
    });
    expect(state).toEqual([...expenses, newExpense]);
});
test('should edit an expense ', () => {
    const updates = {
        description: 'Drank'
    };
    const state = expensesReducer(expenses,{ 
        type:'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    });
    expect(state[0].description).toEqual('Drank');
});
test('should NOT edit an expense if id not found', () => {
    const updates = {
        description: 'Drank'
    };
    const state = expensesReducer(expenses,{ 
        type:'EDIT_EXPENSE',
        id: -1,
        updates
    });
    expect(state).toEqual(expenses);
});