import { LoginCredential, User } from "./auth.api-model";

export const doLogin = async (
  loginCredential: LoginCredential
): Promise<boolean> => {
  const url = "http://localhost:3000/api/security/login";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginCredential),
  });
  return response.ok;
};

export const doLogout = async (): Promise<boolean> => {
  const url = "security/logout";
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return response.ok;
};

export const getCurrentUser = async (): Promise<User> => {
  const url = "security/current-user";
  const response = await fetch(url, {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const user: User = await response.json();
  return user;
};
