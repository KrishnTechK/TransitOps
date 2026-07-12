import React from "react";

import ExpenseForm from "../components/expenses/ExpenseForm";
import ExpenseTable from "../components/expenses/ExpenseTable";

const Expenses = () => {
  return (
    <div className="p-6 space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Expense Management
        </h1>

        <p className="text-gray-500 mt-1">
          Manage transport operational expenses.
        </p>
      </div>

      <ExpenseForm />

      <ExpenseTable />

    </div>
  );
};

export default Expenses;