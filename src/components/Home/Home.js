import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
// import Resume from "../Resume/ResumeNew"
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
// import ResumeNew from "../Resume/ResumeNew";



function Home() {

  const test=()=>{
    console.log("passed")
  }
  
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Avinash Kumar Ray</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>

            {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

          <Row style={{ justifyContent: "center", position: "relative",marginTop:"30px"}}>
          <Button
            variant="primary"
            href={"https://drive.google.com/file/d/1E3OJQowTIhDxJJ8d5ueAYtftRUwoAXlg/view?usp=sharing"}
            target="_blank"
            style={{ maxWidth: "250px" }}
            onClick={test}
          >
          
            &nbsp;View Resume
          </Button>
        </Row> */}
          
           
            
              
          </Row>
          {/* <ResumeNew/> */}
          {/* <Home2 /> */}
        </Container>
       
        {/* <Particle /> */}
      </Container>
     
    </section>
  );
}

export default Home;
