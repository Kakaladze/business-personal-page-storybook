import styled from 'styled-components';
import { Text } from './Text';
import { Button, ButtonProps } from './Button';
import { Flex } from './Containers';

const Header = styled.div({
}, ({ theme: { colors, space } }) => ({
    paddingTop: space.md,
    paddingBottom: space.md,
    borderBottom: `3px solid ${colors.borderHover}`,
}));

const Body = styled.div({
}, ({ theme: { space } }) => ({
    paddingTop: space.md,
    paddingBottom: space.md,
}));


const Container = styled.div<{ hoverAnimation: boolean }>({
}, ({ theme: { colors, borderRadius, space }, hoverAnimation }) => ({
  borderRadius: borderRadius.lg,
  padding: space.lg,
  width: '100%',
  maxWidth: '360px',
  border: `1.5px solid ${colors.borderHover};`,
  transition: 'all 0.25s ease',
  '&:hover': {
    transform: hoverAnimation && 'translateY(-5px)',
  },
  display: 'flex',
  flexDirection: 'column',

  background: `linear-gradient(225deg, ${colors.border} 0%, ${colors.primary} 100%)`,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6),inset 0 1px 0 rgba(255, 255, 255, 0.05),0 0 40px rgba(59, 130, 246, 0.08);'
}));

export interface CardProps {
    headerText: string;
    descriptionText: string;
    hoverAnimation?: boolean;
    buttons?: ButtonProps[]
}

export const Card = ({ headerText, descriptionText, hoverAnimation = true, buttons }: CardProps) => {
  return (
    <Container hoverAnimation={hoverAnimation}>
      <Header>
        <Text fontFamily='heading' fontWeight={600} fontSize='lg'> {headerText} </Text>
      </Header>
      <Body>
        <Text> {descriptionText} </Text>
        {buttons && <Flex paddingTop="md" width="100%" justifyContent="space-evenly" >
            { buttons.map((button) => (
                <Button {...button} />
            ))}
        </Flex> }
      </Body>
    </Container>
  );
};