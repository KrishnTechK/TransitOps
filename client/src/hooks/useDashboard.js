import { useEffect, useState } from "react";

const useDashboard = () => {

  const [loading, setLoading] = useState(true);

  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {

    // Future API Call

    setTimeout(() => {

      setDashboardData({

        activeVehicles: 52,

        availableVehicles: 38,

        maintenance: 6,

        activeTrips: 21,

        pendingTrips: 8,

        driversOnDuty: 34,

        fleetUtilization: "78%",

      });

      setLoading(false);

    }, 500);

  }, []);

  return {

    dashboardData,

    loading,

  };

};

export default useDashboard;