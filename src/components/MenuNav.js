import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.96);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  transform: ${(props) =>
    props.showMenu ? "translateX(0)" : "translateX(100%)"};
  transition: all 0.3s ease;

  li {
    padding: 1rem;
  }
`;

const CloseIcon = styled(IoClose)`
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 20px;
`;

const MenuNav = ({ showMenu, closeButton }) => {
  const menuItems = ["Home", "Knowledge", "Pipeline", "About us", "Contact us"];
  return (
    <Container showMenu={showMenu}>
      <CloseIcon onClick={closeButton}>
        <IoClose />
      </CloseIcon>
      <ul>
        {menuItems.map((item) => (
          <li>
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default MenuNav;
