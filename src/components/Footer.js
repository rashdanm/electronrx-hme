import React from "react";
import styled from "styled-components";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 100px;
    margin: 20px;
  }
`;

const Social = styled.div`
  display: flex;
`;
const Icon = styled.div`
  font-size: 40px;
  margin: 8px;
`;
const Address = styled.div`
  font-size: 14px;
`;

const Footer = () => {
  return (
    <Container>
      <Social>
        <a
          href="https://www.linkedin.com/company/electronrx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <FaLinkedinIn />
          </Icon>
        </a>
        <a
          href="https://www.linkedin.com/company/electronrx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <FaTwitter />
          </Icon>
        </a>
      </Social>
      <img src="/images/logosmall.png" />
      <Address>
        <p>electronRx Ltd.</p>
        <p>28 Chesterton Road</p>
        <p>Cambridge CB4 3AZ</p>
        <p>United Kingdom</p>
      </Address>
    </Container>
  );
};

export default Footer;
