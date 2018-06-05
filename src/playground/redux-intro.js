import { createStore } from 'redux';

console.log('redux-intro.js is running');


//action generators 
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const setCount = ({ newCount }) => ({
    type: 'SET',
    newCount
});
const resetCount = () => ({
    type: 'RESET'
});


//reducers
const countReducer = (state = { count: 0 }, action) => {
    //determine which action invoked (if none, resort to default case)
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.newCount
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            //returning unchanged state
            return state;
    }
};

//how to create a redux global store
const store  = createStore(countReducer);
//subscribe will run a function any time state changes  
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

//Actions
//  how to change the state/store values
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({ newCount: 40 }));
store.dispatch(decrementCount({ decrementBy: 20 }));
store.dispatch(decrementCount());



