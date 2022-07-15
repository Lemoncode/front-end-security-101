import React from "react";
import { Link, useParams } from "react-router-dom";
import { Product, createEmptyProduct } from "./model";

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState<Product>(createEmptyProduct());

  const loadProduct = async () => {
    const url = `http://localhost:3000/api/products/${id}`;
    const product = await fetch(url);
    const data = await product.json();
    setProduct(data);
  };

  React.useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <h1>Hello from productPage</h1>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.image} alt={product.description} />
      <Link to="/">Back to home</Link>
    </>
  );
};
