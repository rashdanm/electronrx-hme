import React from "react";
import styled from "styled-components";
import Button from "./Button";
import section from "../section";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;

  img {
    width: 300px;
    height: 300px;
    margin-top: 50px;
  }

  p {
    width: 100%;
    text-align: center;
    margin: 30px;
  }

  @media (min-width: 768px) {
    p {
      width: 60%;
    }

    img {
      width: 500px;
      height: 500px;
      margin-top: 0;
    }
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
const Right = styled(Left)``;

const Bottom = styled(Top)`
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Section = ({ image, text, button }) => (
  <Container>
    <Top>
      <Left>
        <p>{section[0].text}</p>
        <Button button={section[0].button} />
      </Left>
      <Right>
        <img src={`/images/${section[0].image}.png`} alt="logo" />
      </Right>
    </Top>
    <Bottom>
      <Left>
        <img src={`/images/${section[1].image}.png`} alt="knowledge" />
      </Left>
      <Right>
        <p>{section[1].text}</p>
        <Button button={section[1].button} />
      </Right>
    </Bottom>
  </Container>
);

export default Section;
