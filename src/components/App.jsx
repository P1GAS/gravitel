import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";

import client from "apolloClient";
import DashboardsPageContainer from "containers/DashboardsPageContainer";
import LoginPageContainer from "containers/LoginPageContainer";
import Header from "./Header";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const navigationPath = token ? "/dashboard" : "/login";

  return (
    <ApolloProvider client={client}>
      {token && <Header logout={logout} />}
      <BrowserRouter>
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
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
