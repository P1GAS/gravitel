import React from "react";
import ReactDOM from "react-dom/client";
import App from "components/App";

import "antd/dist/antd.css";
import "styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
