import { Row, Typography, Spin } from "antd";

import Dashboard from "components/Dashboard";

const { Text } = Typography;

const DashboardsPage = ({ dashboards, loading, error }) => {
  return (
    <>
      <div className="container">
        <div className="dashboard-error-loader">
          {loading && <Spin size="large" />}
          {error && (
            <Text type="danger">
              Ошибка:
              {error.graphQLErrors.map(({ message }, index) => (
                <span key={index}> {message}</span>
              ))}
            </Text>
          )}
        </div>
        <Row wrap justify="space-around" gutter={[16, 16]}>
          {dashboards.map(({ name, statistics }, index) => (
            <Dashboard key={index} name={name} statistics={statistics} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default DashboardsPage;
