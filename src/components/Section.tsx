import styled from "styled-components";
import { TextHeader } from "./TextHeader";
import { Box } from "./Containers";

const SectionTest = styled.section(({ theme }) => ({
  position: 'relative',
  background: 'transparent',
  padding: theme.space.md,
  overflow: 'hidden',
  width: '100%',
  minHeight: '450px',
  boxSizing: 'border-box'
}))

const Content = styled.div({
  position: 'relative',
  zIndex: '2'
})

const BottomShape = styled.section(() => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: "100%",
  lineHeight: 0,
  zIndex: 0,
  pointerEvents: 'none',
  
  "& svg": {
    width: '100%',
    height: '120px',
    display: 'block',
    zIndex: 0,
    transform: 'translateZ(0)', 
    willChange: 'filter', 
    overflow: 'visible !important'
  }, 
}))

interface SectionProps {
  headerText: string,
  pageBackground: string,
  children: React.ReactNode
}

export const Section = ({ headerText, pageBackground, children }: SectionProps) => (
    <>
    <SectionTest>
        <Content>
            <TextHeader headerText={headerText} paddingX="2xl" paddingY="sm" marginBottom="md" />
            <Box paddingX="2xl">
              {children}
            </Box>
        </Content>

        <BottomShape>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <defs>
              <filter
                id="shadow"
                filterUnits="userSpaceOnUse"
                x="-200"
                y="-300"
                width="1800"
                height="600"
              >
                <feDropShadow 
                  dx="0" 
                  dy="-60" 
                  stdDeviation="60" 
                  floodColor="rgb(164,163,175, 0.6)" 
                />
              </filter>
            </defs>

            <path
              d="
                M0,80
                C400,80 900,160 1440,80
                L1440,120
                L0,120
                Z
              "
              fill={pageBackground}
              filter="url(#shadow)"
            />
            
            <path
              d="
                M0,80
                C400,80 900,160 1440,80
                L1440,120
                L0,120
                Z
              "
              fill={pageBackground}
            />
          </svg>
        </BottomShape>
    </SectionTest>
    </>
)