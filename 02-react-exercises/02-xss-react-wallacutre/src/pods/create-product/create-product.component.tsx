import React from "react";
import { useNavigate } from "react-router-dom";
import { Product, createEmptyProduct } from "./create-product.vm";
import { routes } from "core";
import { saveProduct } from "./api";
import * as classes from "./create-product.styles";

export const CreateProduct = () => {
  const [product, setProduct] = React.useState<Product>(createEmptyProduct());
  const navigate = useNavigate();

  const updateFieldValue = (name: keyof Product) => (e) => {
    setProduct({
      ...product,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct = saveProduct({
      ...product,
      id: Date.now(),
      image: "https://via.placeholder.com/150",
      price: Number(product.price),
    });
    setProduct(createEmptyProduct());
    setTimeout(() => navigate(routes.productList), 2000);
  };
  return (
    <>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.root}>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            onChange={updateFieldValue("name")}
            value={product.name}
          />
          <img src="https://via.placeholder.com/150" alt="product photo" />
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            onChange={updateFieldValue("description")}
            value={product.description}
          />
          <label htmlFor="price">Price:</label>
          <input
            name="price"
            onChange={updateFieldValue("price")}
            value={product.price}
          />
          <button type="submit">Create Product</button>
        </div>
      </form>
    </>
  );
};
