import { Button, Row, Typography, Spin } from "antd";
import Dashboard from "components/Dashboard";

const { Title, Text } = Typography;

const DashboardsPage = ({ logout, dashboards, loading, error }) => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Title level={4}>Гравител</Title>
            <Button onClick={logout}>Выйти</Button>
          </div>
        </div>
      </header>
      <div className="container">
        {loading && <Spin size="large" />}
        {error && (
          <Text type="danger">
            Ошибка:
            {error.graphQLErrors.map(({ message }, index) => (
              <span key={index}> {message}</span>
            ))}
          </Text>
        )}
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
