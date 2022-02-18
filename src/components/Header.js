import React from "react";
import styled from "styled-components";
import { IoMenu } from "react-icons/io5";

const Container = styled.div`
  position: fixed;
  width: 100vw;
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
  font-size: 30px;
`;

const Header = () => {
  return (
    <Container>
      <img src="/images/logo.png" />
      <MenuButton>
        <IoMenu />
      </MenuButton>
    </Container>
  );
};

export default Header;
