import React from "react";
import { RouterComponent } from "./core";
import { CenterLayout, HeaderLayout } from "./layouts";

export const App: React.FC = () => {
  return (
    <CenterLayout>
      <HeaderLayout>
        <RouterComponent />
      </HeaderLayout>
    </CenterLayout>
  );
};
