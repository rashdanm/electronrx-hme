import React, { useState } from "react";
import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import MenuNav from "./MenuNav";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  background: transparent;
  background-image: linear-gradient(
    360deg,
    transparent 2%,
    var(--darkBlue) 30%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-weight: bold;

  img {
    width: 270px;
    height: 44px;
  }
`;

const MenuButton = styled(IoMenu)`
  cursor: pointer;
  font-size: 30px;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: none;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    font-size: 1rem;
    padding: 1rem;

    &:hover {
      color: #b1f4cf;
    }
  }

  @media (min-width: 1200px) {
    display: block;
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const openMenu = () => setClick(true);
  const closeMenu = () => setClick(false);
  const menuItems = [
    "Home",
    "Knowledge",
    "Pipeline",
    "About us",
    "Contact us",
    "Careers",
    "Privacy Policy",
  ];
  return (
    <Container>
      <img src="/images/logo.png" alt="logo" />
      <Menu>
        <ul>
          {menuItems.map((item) => (
            <li>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </Menu>
      <MenuButton onClick={openMenu}>
        <IoMenu />
      </MenuButton>

      <MenuNav showMenu={click} closeButton={closeMenu} />
    </Container>
  );
};

export default Header;
