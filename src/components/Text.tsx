import styled from "styled-components";
import { theme } from "../theme";

interface TextProps {
    fontFamily?: keyof typeof theme.fontFamily
    fontColor?: keyof typeof theme.colors.text
    fontSize?: keyof typeof theme.fontSize,
    fontWeight?: number,
}

export const Text = styled.p<TextProps>(({ theme, fontFamily = 'body', fontColor = 'textPrimary', fontSize = 'base', fontWeight }) => ({
  fontFamily: theme.fontFamily[fontFamily],
  color: theme.colors.text[fontColor],
  fontSize: theme.fontSize[fontSize],
  fontWeight: fontWeight ? fontWeight : undefined,
  padding: 0,
  margin: 0
}));