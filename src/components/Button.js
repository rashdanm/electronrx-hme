import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: var(--button);
  cursor: pointer;
  border-radius: 100px;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    background: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%);
  }
`;

const Button = ({ button }) => {
  return <Container>{button}</Container>;
};

export default Button;
