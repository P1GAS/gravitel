import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";

import client from "apolloClient";
import DashboardsPageContainer from "containers/DashboardsPageContainer";
import LoginPageContainer from "containers/LoginPageContainer";
import Header from "./Header";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  const navigationPath = token ? "/dashboard" : "/login";

  return (
    <ApolloProvider client={client}>
      {token && <Header logout={logout} />}
      <Routes>
        <Route
          path="/dashboard"
          element={<DashboardsPageContainer token={token} />}
        />
        <Route
          path="/login"
          element={<LoginPageContainer setToken={setToken} token={token} />}
        />
        <Route index element={<Navigate to={navigationPath} />} />
      </Routes>
    </ApolloProvider>
  );
};

export default App;
