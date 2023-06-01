import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import emotion from "../../Assets/Projects/emotion.png";
import MBA from "../../Assets/Projects/MBA.png";
import port from "../../Assets/Projects/port.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio Using React Js"
              description="portfolio website highlights my skills, experience, and accomplishments in the field of web development. From showcasing,my projects and demonstrating technical proficiency to presenting my professional background and skillset, every aspect of the website is designed to captivate and engage the audience."
              ghLink="https://github.com/Lokesh-508/lokeshPortfolio"
            />
          </Col>
        
              
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Healthcare-Fraud-Claim-Analysis"
              description="My project has uncovered numerous doctors and physicians involved in fraudulent activities. Insurance companies bear the brunt of these practices, leading to increased insurance premiums and escalating healthcare costs for everyone involved.This tool aims to empower these stakeholders by providing robust fraud detection capabilities, reducing the costly impact of fraud, and restoring credibility to the industry."
              ghLink="https://github.com/Lokesh-508/Healthcare-Fraud-Claim-Analysis"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MBA}
              isBlog={false}
              title="Market Basket Analysis"
              description="Market Basket analysis is a data mining method focusing on discovering purchase patterns of the customers by extracting association or co-occurrences from a store’s transactional data ."
              ghLink="https://github.com/Lokesh-508/Market-Basket-Analysis"
                   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
