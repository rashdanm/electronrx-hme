import React, { useState } from "react";
import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import MenuNav from "./MenuNav";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  background-color: var(--darkBlue);
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
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const openMenu = () => setClick(true);
  const closeMenu = () => setClick(false);
  return (
    <Container>
      <img src="/images/logo.png" />
      <MenuButton onClick={openMenu}>
        <IoMenu />
      </MenuButton>
      <MenuNav showMenu={click} closeButton={closeMenu} />
    </Container>
  );
};

export default Header;
