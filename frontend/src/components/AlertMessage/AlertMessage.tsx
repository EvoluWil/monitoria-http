import { ReactNode } from 'react';
import { AlertMessageStyled } from './AlertMessage.style';

interface AlertMessageProps {
  type: 'SUCCESS' | 'ERROR';
  children: ReactNode;
}

export function AlertMessage({
  type,
  children,
}: AlertMessageProps) {
  return <AlertMessageStyled type={ type }>{children}</AlertMessageStyled>;
}
