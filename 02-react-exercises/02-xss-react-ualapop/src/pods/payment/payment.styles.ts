import { css } from "@emotion/css";

export const root = css`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 40%;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

export const header = css`
  font-size: 3rem;
  font-weight: bold;
`;

export const price = css`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const button = css`
  background-color: #405cf5;
  border-radius: 6px;
  padding: 20px;
  color: white;
  font-size: 2rem;
  text-decoration: none;
  text-align: center;
  min-width: 7rem;
`;
