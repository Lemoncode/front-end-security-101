import React from "react";
import { Link } from "react-router-dom";
import { routes } from "core";
import { AppLayout } from "layouts";
import { ProductVm } from "./product.vm";

interface Props {
  product: ProductVm;
}

export const Product: React.FC<Props> = (props) => {
  const { product } = props;
  return (
    <AppLayout>
      <h1>Hello from productPage</h1>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.image} alt={product.description} />
      <Link to={routes.productList}>Back to Product List</Link>
    </AppLayout>
  );
};
