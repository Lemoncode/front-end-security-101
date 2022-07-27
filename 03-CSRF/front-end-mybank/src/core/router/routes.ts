import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  movementList: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  movementList: "/movement-list/:id",
};

interface Routes {
  root: string;
  movementList: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  movementList: (id) => generatePath(switchRoutes.movementList, { id }),
};
