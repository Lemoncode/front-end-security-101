import React from "react";
import { useParams } from "react-router-dom";
import { ProductVm, createEmptyProduct } from "./product.vm";
import { Product } from "./product.component";
import { getProduct } from "./api/product.api";

export const ProductContainer: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState<ProductVm>(createEmptyProduct());

  const loadProduct = async () => {
    const product = await getProduct(id);
    setProduct(product);
  };

  React.useEffect(() => {
    loadProduct();
  }, []);

  return <Product product={product} />;
};
