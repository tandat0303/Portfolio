import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dem_system from "../../Assets/Projects/dem_system.png";
import notesApp from "../../Assets/Projects/notesapp.png";
import HMS from "../../Assets/Projects/hms.png";
import rmsbooking from "../../Assets/Projects/rmsbooking.png";
import BMRS from "../../Assets/Projects/bmrs.png";
import calendarapp from "../../Assets/Projects/calendarapp.png;";

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
              imgPath={notesApp}
              isBlog={false}
              title="Notes Taking App"
              description="Notes App is a modern, minimal, and user-friendly web application for creating and managing personal notes. It focuses on simplicity, speed, and scalability using modern frontend tooling and a cloud-ready backend."
              ghLink="https://github.com/tandat0303/Notes-App"
              demoLink="https://notes-app-sgu-std.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calendarapp}
              isBlog={false}
              title="Leave Calendar App"
              description="A modern Schedule Management Web Application built with React, TypeScript, and Vite, designed to provide a fast and interactive interface for managing events, tasks, and daily planning. The project focuses on clean architecture, performance optimization, and scalable frontend structure for building advanced calendar-based systems."
              ghLink="https://github.com/tandat0303/ScheduleApp"
              demoLink="https://lyv-schedule-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BMRS}
              isBlog={false}
              title="Booking Meeting Room System"
              description="The Meeting Room Booking System is a centralized platform designed to help organizations efficiently manage and schedule meeting spaces. It allows users to search for available rooms, view detailed room information (capacity, location, equipment, images), and make reservations in real time."
              ghLink="https://github.com/tandat0303/Small-BMRS"
              demoLink=""
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
              imgPath={HMS}
              isBlog={false}
              title="Hotel Management System"
              description="Hotel Management System: A desktop application developed using Java Swing, with user interface forms designed via NetBeans IDE and packaged with Maven. The primary objective is to streamline hotel business processes, including room reservations, check-in and check-out operations, customer and employee management, invoice handling, and comprehensive reporting."
              ghLink="https://github.com/nguyenfan20/hotel_management"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
