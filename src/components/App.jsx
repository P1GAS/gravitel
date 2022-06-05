import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardsPageContainer from "containers/DashboardsPageContainer";
import LoginPageContainer from "containers/LoginPageContainer";
import { ApolloProvider } from "@apollo/client";

import client from "apolloClient";
import { useState } from "react";

const App = () => {
  const [token] = useState(localStorage.getItem("token"));

  const navigationPath = token ? "/dashboard" : "/login";

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardsPageContainer />} />
          <Route path="/login" element={<LoginPageContainer />} />
          <Route index element={<Navigate to={navigationPath} />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
