import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  img {
    width: 300px;
    height: 300px;
    margin-top: 50px;
  }
`;

const SectionOne = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    width: 80%;
    text-align: center;
    font-size: ;
  }
`;

const SectionTwo = styled(SectionOne)``;

const Section = ({ image, text, button }) => (
  <Container>
    <SectionOne>
      <img src={"/images/" + image + ".png"} />
    </SectionOne>
    <SectionTwo>
      <p>{text}</p>
      <Button button={button} />
    </SectionTwo>
  </Container>
);

export default Section;
