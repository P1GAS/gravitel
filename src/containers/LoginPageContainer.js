import { useMutation } from "@apollo/client";
import { Navigate } from "react-router-dom";
import { useState } from "react";

import LoginPage from "pages/LoginPage";
import { LOGIN } from "servers/gravitel";

const LoginPageContainer = ({ setToken, token }) => {
  const [loginFunc, { loading, error }] = useMutation(LOGIN);

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
