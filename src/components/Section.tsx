import styled from "styled-components";

const Body = styled.div({
      background: "#020617",
})

const SectionTest = styled.section({
  position: "relative",
  padding: "100px 0",
  overflow: "hidden",
  height: '300px',
  color: "white",

    "&::after": {
    content: '""',
    position: "absolute",
    left: "0%",
    top: "20%",
    transform: 'rotate(-2deg)',
    // transform: "translate(-50%, 50%)",

    width: "100%",
    height: "50%",
    // borderRadius: "40%",
    borderBottomRightRadius: '30%',
    borderBottomLeftRadius: '50%',

    background: "#FFFFFF14", // 👈 tylko kolor
    filter: "blur(20px)",    // 👈 robi glow

    pointerEvents: "none",
    }
});

export const Section = () => (
    <Body>
        <SectionTest>Moje Umiejętności</SectionTest>
        <SectionTest>Wybrane Projekty</SectionTest>
    </Body>
)