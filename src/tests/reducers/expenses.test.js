import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual([]);
});

test('should remove the expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove the expense if id is not matched', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        amount: 29000,
        description: 'Splitwise',
        note: '',
        createdAt: 20000
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id is not found', () => {
    const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});

