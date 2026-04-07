import styled from "styled-components";
import {
  flexbox,
  space,
  layout,
  FlexboxProps,
  SpaceProps,
  LayoutProps,
} from "styled-system";

type FlexProps = FlexboxProps & SpaceProps & LayoutProps;

export const Flex = styled.div<FlexProps>(
  {
    display: "flex",
  },
  flexbox,
  space,
  layout
);

type Box = SpaceProps & LayoutProps
export const Box = styled.div<Box>({}, space, layout)