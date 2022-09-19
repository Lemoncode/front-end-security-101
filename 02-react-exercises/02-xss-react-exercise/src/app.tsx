import React from "react";
import * as classes from "./app.styles";
import logo from "./content/logo_2.png";

export const App: React.FC = () => {
  const [enlace, setEnlace] = React.useState("");

  return (
    <div className={classes.root}>
      <h1>Ataque Cross Site Scripting(XSS) con React ejercicio 2</h1>
      <div className={classes.formContainer}>
        <input
          value={enlace}
          onChange={(e) => setEnlace(e.target.value)}
          className={classes.input}
        />

        <a href={enlace} className={classes.button}>
          Ir
        </a>
      </div>
      <img src={logo} alt="logo" className={classes.image} />
    </div>
  );
};
