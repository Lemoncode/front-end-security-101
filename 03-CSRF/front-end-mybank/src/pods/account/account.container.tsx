import React from "react";
import { useAuthContext } from "core/auth";
import { AccountVm } from "./account.vm";
import { Account } from "./account.component";
import { mapAccountListFromApiToVm } from "./account.mappers";
import { getAccountList } from "./api";

export const AccountContainer = () => {
  const { user } = useAuthContext();
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  const loadAccountList = async () => {
    const acountList = await getAccountList(user.id);
    setAccountList(mapAccountListFromApiToVm(acountList));
  };

  React.useEffect(() => {
    loadAccountList();
    console.log(accountList);
  }, []);

  return <Account accountList={accountList} />;
};
