import React from "react";

const trips = [
  {
    id: "TRP-101",
    vehicle: "Truck-01",
    driver: "Alex",
    source: "Delhi",
    destination: "Jaipur",
    status: "Completed",
  },
  {
    id: "TRP-102",
    vehicle: "Van-05",
    driver: "John",
    source: "Lucknow",
    destination: "Kanpur",
    status: "On Trip",
  },
  {
    id: "TRP-103",
    vehicle: "Truck-08",
    driver: "David",
    source: "Mumbai",
    destination: "Pune",
    status: "Pending",
  },
  {
    id: "TRP-104",
    vehicle: "Container-11",
    driver: "Smith",
    source: "Agra",
    destination: "Delhi",
    status: "Cancelled",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";

    case "On Trip":
      return "bg-blue-100 text-blue-700";

    case "Pending":
      return "bg-yellow-100 text-yellow-700";

    case "Cancelled":
      return "bg-red-100 text-red-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

const RecentTripsTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">

      <div className="p-5 border-b">

        <h2 className="text-xl font-semibold">
          Recent Trips
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="px-6 py-3 text-left">Trip ID</th>

              <th className="px-6 py-3 text-left">Vehicle</th>

              <th className="px-6 py-3 text-left">Driver</th>

              <th className="px-6 py-3 text-left">Route</th>

              <th className="px-6 py-3 text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            {trips.map((trip) => (

              <tr
                key={trip.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="px-6 py-4">
                  {trip.id}
                </td>

                <td className="px-6 py-4">
                  {trip.vehicle}
                </td>

                <td className="px-6 py-4">
                  {trip.driver}
                </td>

                <td className="px-6 py-4">
                  {trip.source} → {trip.destination}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      trip.status
                    )}`}
                  >
                    {trip.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default RecentTripsTable;