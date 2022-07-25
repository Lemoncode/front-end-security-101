import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  accountList: string;
  movementList: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  accountList: "/account-list/:id",
  movementList: "/movement-list/:id",
};

interface Routes {
  root: string;
  accountList: (id: string) => string;
  movementList: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  accountList: (id) => generatePath(switchRoutes.accountList, { id }),
  movementList: (id) => generatePath(switchRoutes.movementList, { id }),
};
