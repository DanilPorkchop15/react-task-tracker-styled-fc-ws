import styled from "styled-components";

export const PaginationButton = styled.button<{ $isActive?: boolean }>`
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--primary-color)" : "var(--foreground-color)"};
  color: var(--text-color);
  border: none;
  padding: 5px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const PaginationStyled = styled.div`
  display: flex;
  gap: 5px;
`;
