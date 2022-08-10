import { css } from "@emotion/css";

export const root = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 10px;
`;

export const input = css`
  padding: 12px 20px;
  font-size: 1rem;
  border: 2px solid #d8d800;
  border-radius: 6px;
  outline-color: #72c74b;
  width: 100%;
`;

export const formContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const button = css`
  background-color: #00697b;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 20px;
  padding: 12px 20px;
  width: 100%;
  cursor: pointer;
`;

export const image = css`
  width: 20%;
`;
