import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0;
  padding: 10px 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;
