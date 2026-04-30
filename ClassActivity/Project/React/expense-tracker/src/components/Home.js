import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Expense Tracker</h2>

      <Link to="/add">
        <button>Add Expense</button>
      </Link>

      <br /><br />

      <Link to="/list">
        <button>View Expenses</button>
      </Link>
    </div>
  );
}

export default Home;