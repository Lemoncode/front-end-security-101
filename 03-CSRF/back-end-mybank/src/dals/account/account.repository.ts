import { Account } from "./account.model";
import { db } from "../mock-data";

export const accountRepository = {
  getAccount: async () => db.accountList as Account[],
};
