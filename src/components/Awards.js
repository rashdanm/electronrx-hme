import React from "react";
import styled from "styled-components/";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    width: 65%;
  }
`;

const Awards = () => {
  const awards = ["awardOne", "awardTwo", "awardThree", "awardFour"];
  return (
    <Container>
      <h1>Awards</h1>
      {awards.map((award) => (
        <img src={"/images/" + award + ".png"} />
      ))}
    </Container>
  );
};

export default Awards;
