import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/home.png");
  background-repeat: no-repeat;
  background-size: 100% 50%;
  background-position: bottom;
  padding: 5%;

  text-align: center;
  padding-top: 300px;

  @media (min-width: 768px) {
    background-size: 60%;
    background-position: bottom right;
    background-position: center bottom;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 170px;

    h1 {
      font-size: 50px;
    }
  }
`;

const Hero = () => {
  return (
    <Container>
      <h1>A New Therapeutic Paradigm</h1>
    </Container>
  );
};

export default Hero;
