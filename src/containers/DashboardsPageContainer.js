import DashboardsPage from "pages/DashboardsPage";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DASHBOARDS } from "servers/gravitel";

const DashboardsPageContainer = () => {
  const { loading, error, data } = useQuery(GET_DASHBOARDS);

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [dashboards, setDashboards] = useState([
    {
      name: "Сценарии",
      statistics: { active: 4, inactive: 3, completed: 5 },
    },
    {
      name: "Сценарии",
      statistics: { active: 4, inactive: 3, completed: 5 },
    },
    {
      name: "Сценарии",
      statistics: { active: 4, inactive: 3, completed: 5 },
    },
  ]);

  useEffect(() => {
    if (data) {
      const dashboards = data.map((dashboard) => {
        const [dashboardName, statistics] = Object.entries(dashboard);

        return { name: dashboardName, statistics };
      });

      setDashboards(dashboards);
    }
  }, [data]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <DashboardsPage
      logout={logout}
      loading={loading}
      error={error}
      dashboards={dashboards}
    />
  );
};

export default DashboardsPageContainer;
