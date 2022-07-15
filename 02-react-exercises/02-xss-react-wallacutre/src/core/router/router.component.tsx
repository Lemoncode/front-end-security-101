import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { ProductListScene, ProductPage } from "../../scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<ProductListScene />} />
        <Route path={switchRoutes.product} element={<ProductPage />} />
      </Routes>
    </Router>
  );
};
