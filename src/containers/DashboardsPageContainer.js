import DashboardsPage from "pages/DashboardsPage";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DASHBOARDS } from "servers/gravitel";

const DashboardsPageContainer = ({ token }) => {
  const { client, loading, error, data } = useQuery(GET_DASHBOARDS);

  const [dashboards, setDashboards] = useState([]);

  useEffect(() => {
    if (data) {
      const { dialogs, lists, scenarios } = data.dashboard;

      const dialogsWithName = { name: "Диалоги", statistics: { ...dialogs } };
      const listsWithName = { name: "Списки", statistics: { ...lists } };
      const scenariosWithName = {
        name: "Сценарии",
        statistics: { ...scenarios },
      };

      const dashboards = [dialogsWithName, listsWithName, scenariosWithName];

      setDashboards(dashboards);
    }
  }, [data]);

  useEffect(() => {
    if (!token) {
      client.resetStore();
    }
  }, [token, client]);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <DashboardsPage loading={loading} error={error} dashboards={dashboards} />
  );
};

export default DashboardsPageContainer;
