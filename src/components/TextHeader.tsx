import styled from "styled-components";
import { space, layout, SpaceProps, LayoutProps } from "styled-system";
import { Text } from './Text';


const Header = styled.div<SpaceProps & LayoutProps>(() => ({
     position: "relative",

     "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "2px",
        background: "linear-gradient(to right, transparent 0%, rgba(164, 163, 175, 0.2) 20%, rgba(164, 163, 175, 0.5) 50%, rgba(164, 163, 175, 0.2) 95%, transparent 100%)"
     }
}), space, layout)

interface TextHeaderProps {
    headerText: string;
}

export const TextHeader = ({ headerText, ...rest }: TextHeaderProps & SpaceProps & LayoutProps) => (
    <Header {...rest}>
        <Text fontSize="xl" fontWeight={600}>
            {headerText}
        </Text>
    </Header>
)