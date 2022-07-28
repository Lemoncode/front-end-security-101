import React from "react";
import { useParams } from "react-router-dom";
import { MovementContainer } from "pods/movement-list";

export const MovementsScene = () => {
  const { id } = useParams();
  return <MovementContainer id={id} />;
};
