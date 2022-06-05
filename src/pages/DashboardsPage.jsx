import { Button, Row, Typography } from "antd";
import Dashboard from "components/Dashboard";

const { Title } = Typography;

const DashboardsPage = ({ logout, dashboards }) => {
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
