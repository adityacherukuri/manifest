import React from "react";
import styled from "styled-components";
import henry from "../images/61.png";

const Wrapper = styled.div`
  text-align: center;
  align-items: center;
`;

const AboutImage = styled.img`
  margin-top: 30px;
  margin-bottom: 10px;
`;

const AboutH3 = styled.h3`
  font-family: "SFUIText-Regular";
  color: black;
  font-weight: lighter;
  font-size: 30px;
`;

const AboutP = styled.p`
  font-family: "SFUIText-Regular";
  color: lightgray;
  margin-top: 10px;
`;

const About = () => {
  return (
    <Wrapper>
      <div>
        <AboutImage src={henry} alt="Henry" />
        <AboutH3>Henry</AboutH3>
        <AboutP>TRANSFER SPECIALIST</AboutP>
      </div>
    </Wrapper>
  );
};

export default About;
