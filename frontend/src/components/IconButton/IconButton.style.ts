import styled from 'styled-components';

type IconButtonStyledProps = {
  color?: string;
  hasBorder?: boolean;
};

export const IconButtonStyled = styled.button<IconButtonStyledProps>`
  background-color: transparent;
  padding: 0 2px;
  border-radius: 50%;
  color: ${({ color, theme }) => color || theme.colors.text};
  cursor: pointer;
  border-color: ${({ theme, color }) => color || theme.colors.text};
  border-width: ${({ hasBorder }) => (hasBorder ? '1px' : '0')};
  border-style: solid;
`;
