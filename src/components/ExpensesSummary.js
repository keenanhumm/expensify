import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedAmount = numeral(expensesTotal / 100).format('$0, 0.00');

    return (
        <div>
            <h3>
                Viewing {expensesCount} {expenseWord}, with a grand total of {formattedAmount}.
            </h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);