import { Router } from "express";
import { getAccount } from "./dals/mock-data";

export const accountsApi = Router();

accountsApi.get("/", async (req, res, next) => {
  try {
    const account = await getAccount();
    res.send(account);
  } catch (error) {
    next(error);
  }
});


