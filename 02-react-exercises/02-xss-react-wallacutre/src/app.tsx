import React from "react";
import { RouterComponent } from "./core";
import { CenterLayout } from "./layouts";

export const App: React.FC = () => {
  return (
    <CenterLayout>
      <RouterComponent />
    </CenterLayout>
  );
};
