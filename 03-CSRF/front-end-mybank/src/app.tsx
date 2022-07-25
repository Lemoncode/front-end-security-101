import React from "react";
import { RouterComponent } from "./core";
import { AuthProvider } from "core/auth";

export const App: React.FC = ({ children }) => (
  <AuthProvider router={<RouterComponent />}>{children}</AuthProvider>
);
