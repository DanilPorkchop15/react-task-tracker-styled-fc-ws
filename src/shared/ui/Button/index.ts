import styled from "styled-components";

export const Button = styled.button<{ $danger?: boolean; $success?: boolean }>`
  background-color: ${({ $danger, $success }) =>
    $danger
      ? "var(--danger-color)"
      : $success
      ? "var(--success-color)"
      : "var(--primary-color)"};
  color: var(--text-color);
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-wrap: nowrap;

  &:hover {
    filter: brightness(1.1);
  }

  &:disabled {
    filter: grayscale(1) brightness(0.5);
  }
`;
