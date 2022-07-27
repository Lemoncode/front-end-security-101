import * as api from "./api";
import * as viewmodel from "./account.vm";

const mapAccountFromApiToVm = (account: api.Account): viewmodel.AccountVm => ({
  id: account.id,
  iban: account.iban,
  name: account.name,
  userId: account.userId,
});

export const mapAccountListFromApiToVm = (
  accountList: api.Account[]
): viewmodel.AccountVm[] =>
  Array.isArray(accountList) ? accountList.map(mapAccountFromApiToVm) : [];
