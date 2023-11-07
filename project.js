const balance = document.getElementById("balance");
const expenseForm = document.getElementById("expense-form");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");
const expenseList = document.getElementById("expense-list");

let expenses = [];

// Load expenses from local storage
function loadExpenses() {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (storedExpenses) {
        expenses = storedExpenses;
    }
}

// Save expenses to local storage
function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Add a movie expense
function addMovieExpense(movieName, amount) {
    const expense = {
        text: movieName,
        amount: parseFloat(amount),
        category: "Movie",
    };
    expenses.push(expense);
    saveExpenses();
}

// Calculate and update balance
function updateBalance() {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    balance.textContent = total.toFixed(2);
}

// Function to delete a movie expense
function deleteMovieExpense(index) {
    expenses.splice(index, 1);
    updateBalance();
    saveExpenses();
    displayExpenses();
}

// Function to edit a movie expense
function editMovieExpense(index, newText, newAmount) {
    expenses[index].text = newText;
    expenses[index].amount = parseFloat(newAmount);
    updateBalance();
    saveExpenses();
    displayExpenses();
}

// Function to create a list item for a movie expense
function createMovieExpenseListItem(expense, index) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${expense.text} - $${expense.amount.toFixed(2)}</span>
        <button class="edit-btn" data-index="${index}">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    return li;
}

// Display expenses
function displayExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach((expense, index) => {
        const li = createMovieExpenseListItem(expense, index);
        expenseList.appendChild(li);
    });
}

// Event listener for submitting a movie expense
expenseForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const movieName = textInput.value;
    const amount = amountInput.value;

    if (movieName !== "" && amount !== "") {
        addMovieExpense(movieName, amount);
        updateBalance();
        displayExpenses();
        textInput.value = "";
        amountInput.value = "";
    }
});

// Event listener for editing and deleting movie expenses
expenseList.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-btn")) {
        const index = e.target.getAttribute("data-index");
        const expense = expenses[index];
        const newText = prompt("Edit Name:", expense.text);
        const newAmount = prompt("Edit Amount:", expense.amount);

        if (newText !== null && newAmount !== null) {
            editMovieExpense(index, newText, newAmount);
        }
    } else if (e.target.classList.contains("delete-btn")) {
        const index = e.target.getAttribute("data-index");
        if (confirm("Are you sure you want to delete this expense?")) {
            deleteMovieExpense(index);
        }
    }
});

// Load expenses when the page loads
loadExpenses();
displayExpenses();
updateBalance();
