import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../core";
import { Product } from "./product-list.vm";

interface Props {
  productList: Product[];
}

export const ProductList: React.FC<Props> = (props) => {
  const { productList } = props;

  return (
    <>
      {productList.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <img src={product.image} alt={product.description} />
          <Link to={routes.product(product.id.toString())}>
            Detalle del Producto
          </Link>
        </div>
      ))}
      <Link to={routes.root}>Go to Home</Link>
    </>
  );
};
