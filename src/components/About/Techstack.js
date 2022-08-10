import React from "react";
import { Col, Row } from "react-bootstrap";
import Toolstack from "./Toolstack"
import Particle  from "../Particle"
import Github from "./Github"
import { Container} from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiDatabase
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
  //   <section>
  //   <Container id="skill">    <h1 className="project-heading">
  //   Professional <strong className="purple">Skillset </strong>
  // </h1>
  // <Container id="skills">
<Container fluid className="skills-section" id="skills" style={{color:"white"}}> 
  <Particle />
  <Container>
  <h1 className="project-heading">
  Professional <strong className="purple">Skillset </strong>
</h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} >
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
   
    

        {/* // <Techstack /> */}

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
        </Container>
        </Container>
  );
}

export default Techstack;
