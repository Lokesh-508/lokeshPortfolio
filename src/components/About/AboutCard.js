import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lokesh Sunkari </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />A computer science student passionate about programming and design.
            <br />
            <br />
            
          </p>
          <ul>
            <li className="about-activity"><br></br> 
              <ImPointRight /> B-Tech Bachelor of Technology. I am pursuing my B-Tech in Sreenidhi Institute of Science and Technology as a Computer Science student. I have a CGPA of 8.5.
            </li>
            <li className="about-activity"><br></br> 
              <ImPointRight />  I have done my Intermediate in Alphores Junior College, Karimnagar. I have 99% in my intermediate.
            </li>
            <li className="about-activity">
            <br></br> 
              <ImPointRight /> I have done my schooling in Tetrahedron Model School, Huzurabad. I have scored 98%.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Lokesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
