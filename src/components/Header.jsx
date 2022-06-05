import { Button, Typography } from "antd";

const { Title } = Typography;

const Header = ({ logout }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Title level={4}>Гравител</Title>
          <Button onClick={logout}>Выйти</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
