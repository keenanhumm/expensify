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

const jsx = (
    <Provider store={store}> 
        <AppRouter /> 
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));