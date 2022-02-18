import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/home.png");
  background-repeat: no-repeat;
  background-size: 100% 50%;
  background-position: bottom;

  text-align: center;
  padding-top: 300px;
`;

const Hero = () => {
  return (
    <Container>
      <h1>A New Therapeutic Paradigm</h1>
    </Container>
  );
};

export default Hero;
