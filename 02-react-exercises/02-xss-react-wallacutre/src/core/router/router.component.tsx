import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { ProductListPage, ProductPage } from "../../scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<ProductListPage />} />
        <Route path={switchRoutes.product} element={<ProductPage />} />
      </Routes>
    </Router>
  );
};
