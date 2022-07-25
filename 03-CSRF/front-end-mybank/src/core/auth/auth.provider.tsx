import React from "react";
import * as api from "./api";
import { AuthContext } from "./auth.context";
import { mapUserToVM } from "./auth.mappers";
import { User } from "./auth.model";

interface Props {
  router: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = (props) => {
  const { router, children } = props;
  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const apiUser = await api.getCurrentUser();
    setUser(mapUserToVM(apiUser));
  };

  const login = async (loginCredential: api.LoginCredential) => {
    await api.doLogin(loginCredential);
    await getCurrentUser();
  };

  const logout = async () => {
    await api.doLogout();
    window.history.replaceState(null, null, "/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        getCurrentUser,
      }}
    >
      {user ? children : router}
    </AuthContext.Provider>
  );
};
