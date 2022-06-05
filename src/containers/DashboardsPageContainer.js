import DashboardsPage from "pages/DashboardsPage";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DASHBOARDS } from "servers/gravitel";

const DashboardsPageContainer = ({ token }) => {
  const { loading, error, data } = useQuery(GET_DASHBOARDS);

  const [dashboards, setDashboards] = useState([
    {
      name: "Сценарии",
      statistics: { active: 4, inactive: 3, completed: 5 },
    },
    {
      name: "Списки",
      statistics: { active: 6, inactive: 7, completed: 2 },
    },
    {
      name: "Диалоги",
      statistics: { active: 1, inactive: 10, completed: 2 },
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

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <DashboardsPage loading={loading} error={error} dashboards={dashboards} />
  );
};

export default DashboardsPageContainer;
