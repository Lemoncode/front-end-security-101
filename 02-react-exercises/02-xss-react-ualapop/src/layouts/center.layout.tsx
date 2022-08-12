import React from "react";
import * as classes from "./center.styles";

interface Props {
  children: React.ReactNode;
}

export const CenterLayout: React.FC<Props> = ({ children }) => (
  <div className={classes.root}>{children}</div>
);
