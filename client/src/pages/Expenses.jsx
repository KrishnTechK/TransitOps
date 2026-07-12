import React from "react";

import ExpenseForm from "../components/expenses/ExpenseForm";
import ExpenseTable from "../components/expenses/ExpenseTable";

const Expenses = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Expense Management
        </h1>

        <p className="text-gray-500 mt-2">
          Track and manage operational expenses including fuel, maintenance,
          toll charges, insurance, repairs, and other transport costs.
        </p>
      </div>

      {/* Expense Form */}
      <div className="mb-8">
        <ExpenseForm />
      </div>

      {/* Expense Table */}
      <ExpenseTable />

    </div>
  );
};

export default Expenses;