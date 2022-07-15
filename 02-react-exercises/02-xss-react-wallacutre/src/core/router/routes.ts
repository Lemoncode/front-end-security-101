import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  product: string;
}

interface Routes extends Omit<SwitchRoutes, "product"> {
  product: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  product: "/product/:id",
};

export const routes: Routes = {
  ...switchRoutes,
  product: (id) => generatePath(switchRoutes.product, { id }),
};
