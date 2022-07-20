import { Account } from "./account.model";
import { accountList } from "../mock-data";

export const accountRepository = {
  getAccount: async () => accountList as Account[],
};
