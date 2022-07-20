import { Router } from "express";
import { accountRepository } from "dals";
import { mapAccountListFromModelToApi } from "./account.mappers";

export const accountsApi = Router();

accountsApi.get("/", async (req, res, next) => {
  try {
    const account = await accountRepository.getAccount();
    res.send(mapAccountListFromModelToApi(account));
  } catch (error) {
    next(error);
  }
});
