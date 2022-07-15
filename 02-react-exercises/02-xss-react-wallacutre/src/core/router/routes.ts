import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  productList: string;
  product: string;
  createProduct: string;
}

interface Routes extends Omit<SwitchRoutes, "product"> {
  product: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  productList: "/product-list/",
  product: "/product/:id",
  createProduct: "/create-product",
};

export const routes: Routes = {
  ...switchRoutes,
  product: (id) => generatePath(switchRoutes.product, { id }),
};
