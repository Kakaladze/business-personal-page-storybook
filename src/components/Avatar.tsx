import styled from "styled-components";

const AvatarContainer = styled.div<{size: string | number}>({
}, ({ size, theme: { colors } }) => ({
    position: 'relative',
    height: size,
    width: size,
    borderRadius: '50%',

    display: 'flex',
    padding: '3px',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(45deg, 
        #a6f6c8,
        #c4ffe2,
        #79f0b5,
        #3b8f6a,
        #22674d,
        #3bba7f,
        #70eeb0
    )`,
}));


const AvatarImage = styled.img({
}, () => ({
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: `
    radial-gradient(
        circle at 50% 35%,
        #3b82c4 0%,     /* trochę jaśniejszy highlight */
        #1e3a5f 35%,    /* wolniejsze przejście */
        #0b1220 75%,    /* później ciemny */
        #05070f 100%    /* głęboka krawędź */
    )
    `,
    objectFit: 'cover',
}));

interface AvatarProps {
    src: string;
    alt?: string;
    size: string | number;
}

export const Avatar = ({src, alt, size}: AvatarProps) => (
    <AvatarContainer size={size}>
        <AvatarImage src={src} alt={alt || 'Avatar'} />
    </AvatarContainer>
)