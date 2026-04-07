import styled from "styled-components";
import { NavItem } from "./Navbar";
import { Overlay } from "./Overlay";
import { Text } from './Text';
import { Box, Flex } from "./Containers";
import { Avatar } from "./Avatar";

const SideMenuContainer = styled.div<{isOpen: boolean}>(({ isOpen, theme: { colors, space } }) => ({
    display: 'flex',
    padding: space.lg,
    position: 'fixed',
    top: 0,
    height: '100vh',
    right: 0,
    transform: isOpen ? 'translateX(0%)' : 'translateX(120%)',
    transition: 'transform 0.3s ease',
    zIndex: 1001,
    width: '40%',
    flexDirection: 'column',
    gap: space.md,
    maxWidth: '250px',
    
    background: colors.secondary,
    borderLeft: '1px solid rgba(255,255,255,0.1)',


}))

interface SideMenuProps {
    avatarSrc: string;
    name: string;
    title: string;
    isOpen: boolean;
    onClose: () => void;
    items: NavItem[];
    onItemClick?: (path: string) => void;
}

export const SideMenu = ({isOpen, onClose, avatarSrc, name, title, items, onItemClick}: SideMenuProps) => {
    return <>
        <Overlay isOpen={isOpen} onClick={onClose} />
        <SideMenuContainer isOpen={isOpen}>
            <Flex flexDirection='column' alignItems='center'>
                <Box mb="lg"><Avatar src={avatarSrc} size="120px" /></Box>
                <Text fontSize="xl" fontWeight={600} mb="sm">{name}</Text>
                <Text fontSize="lg" fontColor="accentSecond" fontWeight={600}>{title}</Text>
            </Flex>
            {/* {items.map((item) => (
                <Text> {item.label} </Text>
            ))} */}
        </SideMenuContainer>
    </>
}