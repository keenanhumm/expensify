import { shallow } from 'enzyme';
import React from 'react';
import { ExpenseDashboardPage } from '../../components/ExpenseDashboardPage';
import expenses from '../fixtures/expenses';

test('should render expense dashboard correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});