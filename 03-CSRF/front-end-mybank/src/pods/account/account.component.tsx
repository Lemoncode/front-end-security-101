import React from "react";
import { useAuthContext } from "core/auth";
import { AccountVm } from "./account.vm";

interface Props {
  accountList: AccountVm[];
}

export const Account: React.FC<Props> = (props) => {
  const { accountList } = props;

  const { logout, user } = useAuthContext();
  return (
    <>
      <h2>Welcome {user.name}</h2>
      {accountList.map((account) => (
        <div key={account.id}>
          <span>{account.name}</span> <span>{account.iban}</span>
        </div>
      ))}
      <button onClick={logout}>Logout</button>
    </>
  );
};
