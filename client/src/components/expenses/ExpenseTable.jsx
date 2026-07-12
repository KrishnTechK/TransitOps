import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ExpenseTable = () => {
  const [expenses] = useState([
    {
      id: 1,
      type: "Fuel",
      amount: 12000,
      date: "2026-07-12",
      description: "Diesel Refill",
    },
    {
      id: 2,
      type: "Maintenance",
      amount: 6500,
      date: "2026-07-11",
      description: "Engine Service",
    },
    {
      id: 3,
      type: "Toll",
      amount: 1800,
      date: "2026-07-10",
      description: "National Highway Toll",
    },
    {
      id: 4,
      type: "Insurance",
      amount: 25000,
      date: "2026-07-08",
      description: "Vehicle Insurance Renewal",
    },
  ]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">

      <div className="p-5 border-b">
        <h2 className="text-xl font-semibold text-gray-800">
          Expense Records
        </h2>
      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-5 py-3 text-left">
                Expense Type
              </th>

              <th className="px-5 py-3 text-left">
                Amount
              </th>

              <th className="px-5 py-3 text-left">
                Date
              </th>

              <th className="px-5 py-3 text-left">
                Description
              </th>

              <th className="px-5 py-3 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {expenses.map((expense) => (

              <tr
                key={expense.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="px-5 py-4 font-medium">
                  {expense.type}
                </td>

                <td className="px-5 py-4 text-blue-600 font-semibold">
                  ₹ {expense.amount}
                </td>

                <td className="px-5 py-4">
                  {expense.date}
                </td>

                <td className="px-5 py-4">
                  {expense.description}
                </td>

                <td className="px-5 py-4">

                  <div className="flex justify-center gap-3">

                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg transition"
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ExpenseTable;