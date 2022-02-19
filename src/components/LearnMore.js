import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 120px;

  p {
    width: 80%;
    text-align: center;
    font-size: 1.4rem;
  }

  img {
    width: 300px;
    height: ;
  }
`;

const LearnMore = () => {
  return (
    <Container>
      <p>Our products are powered by machine learning in the eRx Cloud</p>
      <img src="/images/learn.png" />
      <p>
        Custom-built for our uniquely patient centred approach to digital
        healthcare
      </p>
      <Button button="Learn More" />
    </Container>
  );
};

export default LearnMore;
