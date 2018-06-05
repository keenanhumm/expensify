import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';

console.log('Running app.js');

const store = configureStore(); 

store.dispatch(addExpense({
    description: 'water bill',
    amount: 5000,
    createdAt: moment().valueOf()-5000
}));
store.dispatch(addExpense({
    description: 'gas bill',
    amount: 10000,
    createdAt: moment().valueOf()-10000000
}));
store.dispatch(addExpense({
    description: 'rent',
    amount: 90000,
    createdAt: moment().valueOf()-20000000
}));

const jsx = (
    <Provider store={store}> 
        <AppRouter /> 
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));