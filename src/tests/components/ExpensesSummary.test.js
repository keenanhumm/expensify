import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render expenses summary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expenseTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with more than one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expenseTotal={23212321} />);
    expect(wrapper).toMatchSnapshot();
});
