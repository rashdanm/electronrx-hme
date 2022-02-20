import React from "react";
import styled from "styled-components/";

const Container = styled.div`
  width: 100vw;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    width: 65%;
    margin: 10px;
  }

  @media (min-width: 1000px) {
    img {
      width: 300px;
    }
  }
`;

const AwardsWrapper = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1200px) {
    width: 90vw;
    flex-direction: row;
  }
`;

const Awards = () => {
  const awards = ["awardone", "awardtwo", "awardthree", "awardfour"];
  return (
    <Container>
      <>
        <h1>Awards</h1>
      </>
      <AwardsWrapper>
        {awards.map((award, index) => (
          <img key={index} src={"/images/" + award + ".png"} alt="award" />
        ))}
      </AwardsWrapper>
    </Container>
  );
};

export default Awards;
