import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import {Link} from "react-scroll";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
    id="navbar"
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img style={{width:"20%", height:"30px"}} src={"https://pluspng.com/img-png/binary-code-png-binary-code-icon-512.png"} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        {/* <div style={{display:"flex",width:"50%",justifyContent:"space-around"}}> */}
       
          <Nav className="ms-auto" defaultActiveKey="#home">
          <div style={{color:"white",marginTop:"12px"}}>
            {/* <Nav.Item> */}
              <Link as={Link} to="home" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Link>
            {/* </Nav.Item> */}
            </div>

            {/* <Nav.Item color={"white"}> */}
            <div style={{color:"white",margin:"12px"}}>
              <Link
                as={Link}
                to="about"
                spy={true}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Link>
              </div>

              <div style={{color:"white",margin:"12px"}}>
              <Link
                as={Link}
                to="skills"
                spy={true}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Skills
              </Link>
              </div>
        

            <div style={{color:"white",margin:"12px"}}>
              <Link
                as={Link}
                to="projects"
                spy={true}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Link>
              </div>
            {/* </Nav.Item> */}

            {/* <Nav.Item> */}
            <div style={{color:"white",margin:"12px"}}>
              <Link
                as={Link}
                to="resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Link>
              </div>

              </Nav>
        {/* </Navbar.Collapse> */}
             
            {/* </Nav.Item> */}

            {/* <Nav.Item>
              <Nav.Link
                href="https://blogs.soumya-jit.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
      
        
      </Container>
    </Navbar>
  );
}

export default NavBar;
