import styled from "styled-components";

const OverlayContainer = styled.div<{isOpen: boolean}>(({ isOpen }) => ({
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(2px)',
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? 'auto' : 'none',
    transition: 'opacity 0.3s ease',
    zIndex: 1000
}))

interface OverlayProps {
    isOpen: boolean;
    onClick: () => void;
}

export const Overlay = ({isOpen, onClick}: OverlayProps) => (
    <OverlayContainer isOpen={isOpen} onClick={onClick} />
)