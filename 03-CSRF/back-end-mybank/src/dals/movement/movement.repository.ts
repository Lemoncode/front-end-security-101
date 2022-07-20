import { Movement } from "./movement.model";
import { movementList } from "../mock-data";

export const movementRepository = {
  getMovementList: async () => movementList as Movement[],
};
