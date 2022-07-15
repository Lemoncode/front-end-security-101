import React from "react";
import {routes} from 'core';
import { Link, generatePath } from "react-router-dom";
import { Product } from "../model";

export const ProductListPage = () => {
  const [productList, setProductList] = React.useState<Product[]>([]);

  const loadProducts = async () => {
    const url = "http://localhost:3000/api/products";
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };

  React.useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      {productList.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <img src={product.image} alt={product.description} />
          <Link to={generatePath(`/product/${product.id}`)}>
            Detalle del Producto
          </Link>
        </div>
      ))}
    </>
  );
};
