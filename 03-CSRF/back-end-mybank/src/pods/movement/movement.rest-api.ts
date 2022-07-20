import { Router } from "express";
import { movementRepository } from "dals";

export const movementsApi = Router();

movementsApi.get("/", async (req, res, next) => {
  try {
    const movementList = await movementRepository.getMovementList();
    res.send(movementList);
  } catch (error) {
    next(error);
  }
});
