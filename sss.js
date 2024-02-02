// ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p>No expenses found. Please add some expenses.</p>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>{expense.title} - ${expense.amount}</li>
      ))}
    </ul>
  );
};

export default ExpenseList;
