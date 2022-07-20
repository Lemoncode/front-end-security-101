import * as model from "dals";
import * as apiModel from "./movement.api-model";

const mapMovementFromModelToApi = (
  movement: model.Movement
): apiModel.Movement => ({
  id: movement.id,
  description: movement.description,
  amount: movement.amount,
  balance: movement.balance,
  transaction: movement.transaction,
  realTransaction: movement.realTransaction,
  accountId: movement.accountId,
});

export const mapMovementListFromModelToApi = (
  movementList: model.Movement[]
): apiModel.Movement[] =>
  Array.isArray(movementList)
    ? movementList.map(mapMovementFromModelToApi)
    : [];
