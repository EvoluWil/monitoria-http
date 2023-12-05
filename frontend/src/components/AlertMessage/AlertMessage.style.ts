import styled from 'styled-components';

interface AlertMessageStyledProps {
  type: 'SUCCESS' | 'ERROR';
}

export const AlertMessageStyled = styled.div<AlertMessageStyledProps>`
  margin: 20px 0;
  padding: 10px;
  border-radius: 5px;
  color: ${({ type, theme }) => (type === 'SUCCESS'
    ? theme.colors.primary.dark
    : theme.colors.attention)};
  background-color: ${({ type, theme }) => (type === 'SUCCESS'
    ? theme.colors.feedback.success.main
    : theme.colors.feedback.error.main)};
  border: 1px solid
    ${({ type, theme }) => (type === 'SUCCESS'
    ? theme.colors.feedback.success.dark
    : theme.colors.feedback.error.dark)};
`;
