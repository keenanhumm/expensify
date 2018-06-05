
const expenseReducerDefaultState = [];
export default (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => (id !== action.id));
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
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