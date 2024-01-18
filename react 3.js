import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseTracker = () => {
  const expenses = [
    { date: new Date(2022, 0, 15), title: 'Groceries', amount: 50, location: 'Supermarket' },
    { date: new Date(2022, 1, 20), title: 'Gas', amount: 30, location: 'Gas Station' },
    { date: new Date(2022, 2, 10), title: 'Movie Night', amount: 25, location: 'Cinema' },
  ];

  return (
    <div>
      <h2>Expense Items</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
        />
      ))}
    </div>
  );
};

export default ExpenseTracker;


