import { FiMenu, FiX } from "react-icons/fi";
import styled from "styled-components";
import { space, layout, SpaceProps, LayoutProps } from 'styled-system';

const BurgerContainer = styled.button<SpaceProps & LayoutProps>(({theme: { colors }}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: 'none',
    border: 'none',
    cursor: 'pointer',

    color: colors.text.textPrimary,

    "& svg": {
        transition: 'transform 0.2s ease',
    },

    "&:hover svg": {
        transform: 'scale(1.1)',
    }

}), space, layout);

interface BurgerProps {
    open?: boolean;
    iconSize?: string;
    onClick?: () => void;
}

export const BurgerButton  = ({ open, onClick, iconSize = '24px', ...props }: BurgerProps & SpaceProps & LayoutProps) => {
  return (
    <BurgerContainer onClick={onClick} {...props}>
      {open ? <FiX size={iconSize} /> : <FiMenu size={iconSize}/>}
    </BurgerContainer>
  );
}