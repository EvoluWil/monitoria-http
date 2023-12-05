import styled from 'styled-components';

export const InputStyled = styled.input`
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.detail};
  font-size: 16px;
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
