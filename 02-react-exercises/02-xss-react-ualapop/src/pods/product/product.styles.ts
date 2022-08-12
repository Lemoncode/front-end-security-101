import { css } from "@emotion/css";

export const root = css`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 2rem;
  padding: 2rem;
  max-width: 30%; 
`;

export const image = css`
  border-radius: 0.5rem;
`;

export const price = css`
  font-size: 2rem;
  font-weight: bold;
`;

export const name = css`
  font-size: 1.5rem;
`;

export const buttonContainer = css`
  margin: 3rem 0;
  display: flex;
  justify-content: space-around;
`;

export const buttonBuy = css`
  gap: 0.5rem;
  background-color: #b87c4c;
  margin-left: 2rem;
`;
