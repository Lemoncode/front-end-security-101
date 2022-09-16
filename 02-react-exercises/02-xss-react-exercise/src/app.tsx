import React from "react";
import * as classes from "./app.styles";
import logo from "./content/logo_2.png";

export const App: React.FC = () => {
  const [enlace, setEnlace] = React.useState("");
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOutput(`Input Value: ${input}`);
    setInput("");
  };

  return (
    <div className={classes.root}>
      <h1>Ataque Cross Site Scripting(XSS) con React ejercicio 2</h1>

      <input value={enlace} onChange={(e) => setEnlace(e.target.value)} />

      <a href={enlace} className={classes.button}>
        Pulsa aquí para ir a Lemoncode
      </a>

      <img src={logo} alt="logo" className={classes.image} />
    </div>
  );
};
