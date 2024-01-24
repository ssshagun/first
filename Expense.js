

import React, { useState } from 'react';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <h1>Expense Tracker App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Expense Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="amount">Expense Amount:</label>
          <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
        </div>
        <div>
          <label htmlFor="date">Expense Date:</label>
          <input type="date" id="date" value={date} onChange={handleDateChange} />
        </div>
        <button type="submit">Add Expense</button>
      </form>
      {/* Render the list of expenses or any other components */}
    </div>
  );

  function ExpenseForm() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };

    const handleAmountChange = (event) => {
      setAmount(event.target.value);
    };

    const handleDateChange = (event) => {
      setDate(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      if (title.trim() === '' || amount.trim() === '' || date.trim() === '') {
        alert('Please fill out all fields');
        return;
      }

      const newExpense = {
        title,
        amount: +amount,
        date: new Date(date),
      };

      addExpenseHandler(newExpense);

      setTitle('');
      setAmount('');
      setDate('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Expense Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="amount">Expense Amount:</label>
          <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
        </div>
        <div>
          <label htmlFor="date">Expense Date:</label>
          <input type="date" id="date" value={date} onChange={handleDateChange} />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    );
  }
};

export default App;
