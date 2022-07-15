import React from "react";
import * as classes from "./app.styles";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => (
  <div className={classes.root}>{children}</div>
);
