import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  // ✅ Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) {
      setExpenses(JSON.parse(saved));
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <Router>
      <div>
        <h1>Expense Tracker App</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add"
            element={<AddExpense addExpense={addExpense} />}
          />
          <Route
            path="/list"
            element={<ExpenseList expenses={expenses} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;