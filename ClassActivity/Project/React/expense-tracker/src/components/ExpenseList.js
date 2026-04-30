import React from "react";
import { Link } from "react-router-dom";

function ExpenseList({ expenses }) {
  const total = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
  );

  return (
    <div>
      <h2>Expense List</h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet</p>
      ) : (
        <ul>
          {expenses.map((exp, index) => (
            <li key={index}>
              {exp.title} - ₹{exp.amount}
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ₹{total}</h3>

      <br />

      {/* ✅ Go Home Button */}
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
}

export default ExpenseList;