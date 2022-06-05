import { Card, Typography, Progress } from "antd";
import { useState } from "react";

const { Text, Title } = Typography;

const Dashboard = ({ name, statistics }) => {
  const { active, inactive, completed } = statistics;

  const [hoveredItem, setHoveredItem] = useState("");

  const getPercent = (item) => {
    const percent = (100 * item) / total;
    const fixedPercent = percent.toFixed(0);
    return fixedPercent;
  };

  const total = active + inactive + completed;
  const hoveredItemValue = statistics[hoveredItem];
  const progressPercent = hoveredItem
    ? getPercent(hoveredItemValue)
    : getPercent(total);

  const addHoverHandler = (name) => ({
    onMouseOver: () => {
      setHoveredItem(name);
    },
    onMouseLeave: () => {
      setHoveredItem("");
    },
  });

  return (
    <div>
      <Card className="default-card">
        <div>
          <Title level={4}>{name}</Title>
          <Progress
            width={150}
            className="dashboard-progress"
            type="circle"
            format={(percent, successPercent) =>
              successPercent ? `${successPercent}%` : `${percent}%`
            }
            percent={getPercent(total)}
            success={{
              percent: progressPercent,
            }}
          />
          <div className="dashboard-text">
            <Text>Всего:</Text>
            <Text>{total}</Text>
          </div>
          <div className="dashboard-text" {...addHoverHandler("active")}>
            <Text>Активных:</Text>
            <Text>{active}</Text>
          </div>
          <div className="dashboard-text" {...addHoverHandler("inactive")}>
            <Text>Неактивных:</Text>
            <Text>{inactive}</Text>
          </div>
          <div className="dashboard-text" {...addHoverHandler("completed")}>
            <Text>Завершенных:</Text>
            <Text>{completed}</Text>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
