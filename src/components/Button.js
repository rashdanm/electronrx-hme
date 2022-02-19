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
`;

const Button = ({ button }) => {
  return <Container>{button}</Container>;
};

export default Button;
