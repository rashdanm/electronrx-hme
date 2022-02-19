import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  label {
    font-size: 1rem;
  }

  input {
    margin: 10px;
    margin-bottom: 20px;
    padding: 10px;
    width: 350px;
    border-radius: 100px;
    text-align: center;
    font-size: 1.2rem;
    color: var(--darkBlue);
  }
`;

const Form = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  return (
    <Container>
      <label>Email</label>
      <input></input>
      <Button button="Subscribe" />
    </Container>
  );
};

export default Form;
