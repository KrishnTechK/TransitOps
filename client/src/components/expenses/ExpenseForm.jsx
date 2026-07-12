import React, { useState } from "react";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    expenseType: "",
    amount: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Future API Integration

    alert("Expense Added Successfully!");

    setFormData({
      expenseType: "",
      amount: "",
      date: "",
      description: "",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">

      <h2 className="text-xl font-semibold mb-6">
        Add Expense
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >

        {/* Expense Type */}

        <select
          name="expenseType"
          value={formData.expenseType}
          onChange={handleChange}
          required
          className="border rounded-lg px-4 py-3"
        >
          <option value="">Expense Type</option>
          <option value="Fuel">Fuel</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Toll">Toll Charges</option>
          <option value="Insurance">Insurance</option>
          <option value="Repair">Repair</option>
          <option value="Other">Other</option>
        </select>

        {/* Amount */}

        <input
          type="number"
          name="amount"
          placeholder="Amount (₹)"
          value={formData.amount}
          onChange={handleChange}
          required
          className="border rounded-lg px-4 py-3"
        />

        {/* Date */}

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="border rounded-lg px-4 py-3"
        />

        {/* Description */}

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3"
        />

        {/* Submit */}

        <div className="md:col-span-2 lg:col-span-4">

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Save Expense
          </button>

        </div>

      </form>

    </div>
  );
};

export default ExpenseForm;