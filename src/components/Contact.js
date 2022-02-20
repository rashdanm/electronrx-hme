import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Form from "./Form";

const Container = styled.div`
  width: 100vw;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  align-items: center;

  h2 {
    margin: 2rem;
  }

  p {
    font-size: 1rem;
    width: 80%;
    margin: 1rem;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.3rem;
      width: 40%;
    }
  }
`;

const Contact = () => {
  return (
    <Container>
      <h2>Get in Touch</h2>
      <p>
        {`We’re`} committed to pursuing a collaborative and transparent approach
        to developing our novel health technologies, and therefore strive to
        build trusted and enduring partnerships with others equally passionate
        about transforming how we deliver healthcare and treat disease.
      </p>
      <br />
      <p>
        Sound like you? {`We’d`} love to speak with you! Get in touch to explore
        how we can partner to achieve our goals.
      </p>
      <Button button="Contact Us" />
      <h2>Never miss new insights</h2>
      <p>
        Sign up to our newsletter to stay up to date with all of the latest
        information about electronRx progress and awards
      </p>
      <Form />
    </Container>
  );
};

export default Contact;
