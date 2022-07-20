import { Movement } from "./movement.model";
import { db } from "../mock-data";

export const movementRepository = {
  getMovementList: async () => db.movementList as Movement[],
};
