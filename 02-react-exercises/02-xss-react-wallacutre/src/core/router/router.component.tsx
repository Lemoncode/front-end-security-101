import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  ProductListScene,
  ProductPage,
  HomeScene,
  CreateProductScene,
} from "../../scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path={switchRoutes.productList} element={<ProductListScene />} />
        <Route path={switchRoutes.product} element={<ProductPage />} />
        <Route
          path={switchRoutes.createProduct}
          element={<CreateProductScene />}
        />
      </Routes>
    </Router>
  );
};
