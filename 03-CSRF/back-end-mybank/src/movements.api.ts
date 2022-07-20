import { Router } from "express";
import { getMovements } from "./dals/mock-data";

export const movementsApi = Router();

movementsApi.get("/", async (req, res, next) => {
  try {
    const movementList = await getMovements();
    res.send(movementList);
  } catch (error) {
    next(error);
  }
});
