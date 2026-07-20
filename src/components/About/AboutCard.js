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
            <br />I am currently a{" "}
            <span className="purple">Information Technology Technician</span> at
            THE SOUTHERN FERTILIZER JOINT STOCK COMPANY
            <br />I graduated with a Bachelor of Engineering degree in
            Information Technology from{" "}
            <span className="purple">Sai Gon University</span> (SGU).
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
