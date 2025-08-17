import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Truong Tan Dat </span>
            from <span className="purple"> Ho Chi Minh City, Vietnam.</span>
            <br />
            I am currently a student at SGU - Sai Gon University.
            {/* <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports (mostly Badminton)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning Ideas into Reality!"{" "}
          </p>
          <footer className="blockquote-footer">Truong Tan Dat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
