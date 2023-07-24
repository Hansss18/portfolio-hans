import React from "react";
import { MdAndroid, MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import ProgressBar from "@ramonak/react-progress-bar";

const Services = () => {
  return (
    <Container id="skills">
      <Slide direction="down">
        <h4>
          My <span className="green">Skills</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdAndroid}
            title={"Flutter"}
            disc={<ProgressBar completed={75} bgColor="#01be96" animateOnRender />}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"ReactJs"}
            disc={<ProgressBar completed={65} bgColor="#01be96" animateOnRender />}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Web Designer"}
            disc={<ProgressBar completed={70} bgColor="#01be96" animateOnRender />}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
