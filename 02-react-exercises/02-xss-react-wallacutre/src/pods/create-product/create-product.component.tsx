import React from "react";
import { Product, createEmptyProduct } from "./create-product.vm";
import { saveProduct } from "./api/create-product.api";
import * as classes from "./create-product.styles";

export const CreateProduct = () => {
  const [product, setProduct] = React.useState<Product>(createEmptyProduct());

  const updateFieldValue = (name: keyof Product) => (e) => {
    setProduct({
      ...product,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveProduct({
      ...product,
      id: Date.now(),
      image: "https://via.placeholder.com/150",
      price: Number(product.price),
    });
    setProduct(createEmptyProduct());
  };
  return (
    <>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.root}>
          <label htmlFor="name">Name:</label>
          <input name="name" onChange={updateFieldValue("name")} />
          <img src="https://via.placeholder.com/150" alt="product photo" />
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            onChange={updateFieldValue("description")}
          />
          <label htmlFor="name">Price:</label>
          <input name="name" onChange={updateFieldValue("price")} />
          <button type="submit">Create Product</button>
        </div>
      </form>
    </>
  );
};
