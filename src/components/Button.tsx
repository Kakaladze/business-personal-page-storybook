import styled from "styled-components";
import { Text } from './Text'

const ButtonElement = styled.button<{primary: boolean, fullWidth: boolean}>({
}, ({ theme: { space, borderRadius, colors}, primary, fullWidth }) => ({
    borderRadius: borderRadius.md,
    cursor: 'pointer',
    border: `1px solid ${colors.borderHover}`,
    outline: 'none',
    width: fullWidth ? '100%' : undefined,
    display: fullWidth ? 'block' : 'inline',
    padding: `${space.sm} ${space.md}`,
    transition: "all 0.2s ease",
    background: primary ? 
      `linear-gradient(180deg, ${colors.accent} 0%, ${colors.accentSecond} 100%)`
      :`linear-gradient(225deg, ${colors.border} 0%, ${colors.primary} 100%)`,

    "&:active": {
      transform: "translateY(1px)",
      boxShadow: `
        0 2px 6px #00000066,
        inset 0 2px 4px #00000066
      `,
    },

    "&:hover": {
        background: primary ? 
          `linear-gradient(180deg, ${colors.accentHover} 0%, ${colors.accentSecond} 100%)`
          :`linear-gradient(225deg, ${colors.borderHover} 0%, ${colors.primary} 100%)`,
    }
}));

export interface ButtonProps {
  primary?: boolean;  
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
}
export const Button = ({ text, primary = true, onClick, fullWidth }: ButtonProps) => {
    return <ButtonElement primary={primary} onClick={onClick} fullWidth={fullWidth}> <Text fontWeight={600}> {text} </Text></ButtonElement>
}