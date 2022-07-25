import React from "react";
import { Credential, createEmptyCredential } from "./login.vm";
import { useAuthContext } from "core/auth";

interface Props {
  onSubmit: (credential: Credential) => void;
}

export const Login: React.FC<Props> = (props) => {
  const { onSubmit } = props;
  const { logout } = useAuthContext();

  const [credential, setCredential] = React.useState<Credential>(
    createEmptyCredential()
  );

  const updateFieldValue = (name: keyof Credential) => (e) => {
    setCredential({ ...credential, [name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(credential);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" onChange={updateFieldValue("email")} />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={updateFieldValue("password")}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={logout}>Logout</button>
    </>
  );
};
