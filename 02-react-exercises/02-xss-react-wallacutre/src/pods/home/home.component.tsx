import React from "react";
import { Button } from "common/components/link/link.component";
import { routes } from "core";
import * as classes from "./home.styles";
import logo from "core/assets/Ualapop.svg";

export const Home: React.FC = () => {
  return (
    <>
      <div className={classes.root}>
        <img src={logo} alt="Ualapop" />
        <div className={classes.buttonContainer}>
          <Button route={routes.productList} label="Product List" />
          <Button
            route={routes.createProduct}
            label="Create Product"
            className={classes.button}
          />
        </div>
      </div>
    </>
  );
};
