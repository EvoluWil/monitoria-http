import styled from 'styled-components';

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  border: 2px solid ${({ theme }) => theme.colors.detail};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  position: relative;

  &:checked::after {
    content: '\\2713';
    display: block;
    position: absolute;
    top: -3px;
    left: 3px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;
