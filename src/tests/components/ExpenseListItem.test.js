import { shallow } from 'enzyme';
import React from 'react';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render expense list item correctly', () => {
    const wrapper = shallow(<ExpenseListItem key={expenses[0].description} {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});