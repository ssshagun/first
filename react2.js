import React from 'react';

// ExpenseItem component to display individual expenses
const ExpenseItem = ({ name, amount, location }) => {
  return (
    <div>
      {name} - Rs {amount} (Location: {location})
    </div>
  );
};

// ExpenseTracker component to display the header and expense items
const ExpenseTracker = () => {
  // Sample data
  const expenses = [
    { name: 'Food', amount: 10, locationOfExpenditure: 'Grocery Store' },
    { name: 'Petrol', amount: 100, locationOfExpenditure: 'Gas Station' },
    { name: 'Movies', amount: 200, locationOfExpenditure: 'Cinema' },
  ];

  return (
    <div>
      <h2>Expense Items</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          name={expense.name}
          amount={expense.amount}
          location={expense.locationOfExpenditure}
        />
      ))}
    </div>
  );
};

export default ExpenseTracker;
