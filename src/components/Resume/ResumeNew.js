import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Avinash_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
// import Row from "react-bootstrap";
// import policy_bazar from "../../Assets/Projects/policy_bazar"
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink =
//   "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div >
      <Container fluid className="resume-section" id="resume" opacity="0.5">
        {/* <Particle /> */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
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
        <br/>
        {/* <Container>{policy_bazar}</Container> */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={"https://drive.google.com/file/d/1E3OJQowTIhDxJJ8d5ueAYtftRUwoAXlg/view?usp=sharing"}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            {/* <AiOutlineDownload /> */}
            &nbsp;View Resume
          </Button>
        </Row>

       
      </Container>
    </div>
  );
}

export default ResumeNew;
