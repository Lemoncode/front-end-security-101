import React from "react";
import * as classes from "./app.styles";
import logo from "./content/logo_2.png";

export const App: React.FC = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOutput(`Input Value: ${input}`);
    setInput("");
    setTimeout(() => {
      setOutput("");
    }, 5000);
    // eval('1' + '1');
  };

  return (
    <div className={classes.root}>
      <h1>Xss with React 1</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className={classes.input}
            value={input}
          />
          <input type="submit" value="Submit" className={classes.button} />
        </div>
      </form>

      <h2 dangerouslySetInnerHTML={{ __html: output }}></h2>
      <img src={logo} alt="logo" className={classes.image} />
    </div>
  );
};
