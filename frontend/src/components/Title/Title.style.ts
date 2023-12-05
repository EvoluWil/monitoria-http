import styled from 'styled-components';

export const TitleStyled = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin: 16px 0;
`;
