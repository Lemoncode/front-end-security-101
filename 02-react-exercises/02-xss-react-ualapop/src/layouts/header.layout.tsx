import React from "react";
import * as classes from "./header.styles";
import logo from "core/assets/Ualapop.svg";

interface Props {
  children: React.ReactNode;
}

export const HeaderLayout: React.FC<Props> = ({ children }) => (
  <>
    <img src={logo} alt="Ualapop" className={classes.logo} />
    {children}
  </>
);
