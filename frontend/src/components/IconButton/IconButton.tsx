import { IconButtonStyled } from './IconButton.style';

type IconButtonProps = {
  onClick: () => void;
  icon: string;
  color: string;
  hasBorder?: boolean;
};

export function IconButton({ onClick, icon, color, hasBorder = true }: IconButtonProps) {
  return (
    <IconButtonStyled onClick={ onClick } color={ color } hasBorder={ hasBorder }>
      <i className={ `fa fa-${icon}` } />
    </IconButtonStyled>
  );
}
