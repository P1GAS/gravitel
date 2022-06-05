import { useState } from "react";

import { Form, Input, Button, Card, Typography } from "antd";

const { Title, Text } = Typography;

const LoginPage = ({ handleLogin, loading, error }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    handleLogin(username, password);
  };

  return (
    <div className="container content-center">
      <Card className="default-card">
        <Title>Авторизация</Title>
        {error && (
          <Text>
            Ошибка:{" "}
            {error.graphQLErrors.map(({ message }, index) => (
              <>
                <span key={index}>{message}</span>{" "}
              </>
            ))}
          </Text>
        )}
        <Form
          name="login"
          layout="vertical"
          onFinish={submit}
          autoComplete="off"
        >
          <Form.Item label="Юзернейм" name="username">
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Пароль" name="password">
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item className="direction-rtl">
            <Button loading={loading} type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
