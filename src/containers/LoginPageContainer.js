import LoginPage from "pages/LoginPage";
import { useMutation } from "@apollo/client";
import { LOGIN } from "servers/gravitel";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const LoginPageContainer = () => {
  const [loginFunc, { loading, error }] = useMutation(LOGIN);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = async (username, password) => {
    const res = await loginFunc({
      variables: {
        username: username,
        password: password,
      },
    });

    const token = res.data.login?.token;

    localStorage.setItem("token", token);
    setToken(token);
  };

  if (token) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  return (
    <LoginPage handleLogin={handleLogin} loading={loading} error={error} />
  );
};

export default LoginPageContainer;
