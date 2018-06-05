import { shallow } from 'enzyme';
import React from 'react';
import { NotFoundPage } from '../../components/NotFoundPage';
import expenses from '../fixtures/expenses';

test('should render expense dashboard correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});