import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { defaultFilters, filters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn(); 
    wrapper = shallow(
        <ExpenseListFilters 
            filters={defaultFilters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate} 
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render expense list filters correctly with default values', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters correctly with default values', () => {
    wrapper.setProps({
        filters: filters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = "new";
    const wrapper = shallow(<ExpenseListFilters setTextFilter={setTextFilter} filters={defaultFilters} />);
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});
test('should sort by date', () => {
    const newValue = 'date';
    wrapper.setProps({
        filters: filters
    });
    wrapper.find('select').simulate('change', {
        target: { value: newValue }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const newValue = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value: newValue }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

//sort by date

//sort by amount

//handle date changes

//handle focus changes