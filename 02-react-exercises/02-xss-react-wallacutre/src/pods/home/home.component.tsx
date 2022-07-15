import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../core";

export const Home: React.FC = () => {
  return (
    <>
      <h1>Bienvenidos a Wallacutre</h1>
      <Link to={routes.productList}>Product List</Link>
      <Link to={routes.createProduct}>Create Product</Link>
    </>
  );
};
