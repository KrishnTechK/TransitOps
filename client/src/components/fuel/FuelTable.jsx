import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const FuelTable = () => {
  const [fuelLogs] = useState([
    {
      id: 1,
      vehicle: "Truck-01",
      date: "2026-07-12",
      liters: 120,
      price: 95,
      total: 11400,
    },
    {
      id: 2,
      vehicle: "Van-05",
      date: "2026-07-11",
      liters: 80,
      price: 95,
      total: 7600,
    },
    {
      id: 3,
      vehicle: "Truck-08",
      date: "2026-07-10",
      liters: 150,
      price: 94,
      total: 14100,
    },
    {
      id: 4,
      vehicle: "Container-11",
      date: "2026-07-09",
      liters: 200,
      price: 95,
      total: 19000,
    },
  ]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">

      <div className="p-5 border-b">
        <h2 className="text-xl font-semibold text-gray-800">
          Fuel Logs
        </h2>
      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-5 py-3 text-left">Vehicle</th>

              <th className="px-5 py-3 text-left">Date</th>

              <th className="px-5 py-3 text-left">Liters</th>

              <th className="px-5 py-3 text-left">
                Price/L
              </th>

              <th className="px-5 py-3 text-left">
                Total Cost
              </th>

              <th className="px-5 py-3 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {fuelLogs.map((log) => (

              <tr
                key={log.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="px-5 py-4">
                  {log.vehicle}
                </td>

                <td className="px-5 py-4">
                  {log.date}
                </td>

                <td className="px-5 py-4">
                  {log.liters} L
                </td>

                <td className="px-5 py-4">
                  ₹ {log.price}
                </td>

                <td className="px-5 py-4 font-semibold text-blue-600">
                  ₹ {log.total}
                </td>

                <td className="px-5 py-4">

                  <div className="flex justify-center gap-3">

                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
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

export default FuelTable;