import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { AccountScene } from "scenes/account.scene";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<AccountScene />} />
      </Routes>
    </Router>
  );
};
