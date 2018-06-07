import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import AddExpenseButton from './AddExpenseButton';

export const ExpenseDashboardPage = () => (
    <div>
        <AddExpenseButton />
        <ExpenseListFilters />
        <div className="box-layout">
            <ExpensesSummary />
            <ExpenseList /> 
        </div>
       
    </div>
);


export default ExpenseDashboardPage;