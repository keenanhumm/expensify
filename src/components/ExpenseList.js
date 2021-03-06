import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="container">
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                    props.expenses.map((expense) => (
                        <ExpenseListItem key={expense.description} {...expense} />
                    ))
                )
        }
        {}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

