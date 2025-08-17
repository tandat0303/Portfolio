import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import food_chatbot from "../../Assets/Projects/food_chatbot.png";
import FaceDetection from "../../Assets/Projects/FaceDetection.png";
import PDUL from "../../Assets/Projects/posDecLED.png";
import dem_system from "../../Assets/Projects/dem_system.png";
import suicide from "../../Assets/Projects/suicide.png";
import rmsbooking from "../../Assets/Projects/rmsbooking.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dem_system}
              isBlog={false}
              title="Digital Enterprise System"
              description="The system digitizes internal business processes, focusing on form management, approval workflows, user management, and notifications. It streamlines the handling of various internal forms such as meeting room bookings, payment requests, business trip registrations, salary adjustments, IT equipment requests, and recruitment proposals."
              ghLink="https://github.com/tandat0303/EnterpriseSystem"
              demoLink="https://digital-enterprise-system.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rmsbooking}
              isBlog={false}
              title="RMS-Booking"
              description="The Restaurant Management System Booking - e-commerce system was used to book a table in restaurant, which is designed according to Microservices architecture, which helps to separate functions, ensuring flexibility, scalability and easy maintenance."
              ghLink="https://github.com/GiaBaon/CNLTHD_nhom/tree/main/Example/demo"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PDUL}
              isBlog={false}
              title="Position Detection Using LED Light"
              description="Using the meta-learning method, combined with artificial neural network (ANN) to predict the position by light sources (LEDs), most suitable in the condition of faulty lights or high noise environment."
              ghLink="https://github.com/tandat0303/PositionDetection-Using-LEDLight"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food_chatbot}
              isBlog={false}
              title="Food Chatbot - Search Recipes App"
              description="This project develops an AI-powered cooking chatbot that assists users in recipe suggestions based on available ingredients, personalized meal planning, and step-by-step cooking guidance."
              ghLink="https://github.com/tandat0303/Food_Chabot"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FaceDetection}
              isBlog={false}
              title="Student attendance"
              description="..."
              ghLink="https://github.com/tandat0303/StudentAttendance"
              demoLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
