import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});  
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('aaa',{
        note: 'thing'
    });  
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'aaa',
        updates: {
            note: 'thing'
        }
    });
});

test('should set up add expense action object with provided values',() => {
    const newExpense = {
        description: 'rent',
        amount: 200,
        createdAt: 1000,
        note: 'thing'
    };
    const action = addExpense(newExpense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...newExpense,
            id: expect.any(String)
        }        
    })
});

test('should set up add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    })
});
