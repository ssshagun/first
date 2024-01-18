import React from 'react';

// ExpenseItem component to display individual expenses
const ExpenseItem = ({ name, amount }) => {
  return (
    <div>
      {name} Rs {amount}
    </div>
  );
};

// App component to display the header and expense items
const App = () => {
  return (
    <div>
      <h2>Expense Items</h2>
      <ExpenseItem name="Food" amount={10} />
      <ExpenseItem name="Petrol" amount={100} />
      <ExpenseItem name="Movies" amount={200} />
    </div>
  );
};

export default App;
