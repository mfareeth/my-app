import React, { useState } from "react";
import { FaUser, FaTools, FaGraduationCap, FaGamepad, FaImages, FaFolderOpen } from "react-icons/fa";
import myPhoto from './Fareeth.jpg';
import FadeInSection from "./FadeInSection"; // Import FadeInSection

const images = [
  "https://source.unsplash.com/400x300/?nature",
  "https://source.unsplash.com/400x300/?technology",
  "https://source.unsplash.com/400x300/?coding",
  "https://source.unsplash.com/400x300/?travel",
  "https://source.unsplash.com/400x300/?banking"
];

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    color: "black"
  },
  header: {
    background: "linear-gradient(to right, #667eea, #764ba2)",
    color: "black",
    padding: "2rem",
    textAlign: "center",
    borderRadius: "12px",
    marginBottom: "1rem"
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    background: "#ffffffcc",
    padding: "1rem",
    borderRadius: "12px",
    marginBottom: "2rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  },
  navButton: (isActive) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    background: isActive ? "#764ba2" : "#f0f0f0",
    color: isActive ? "white" : "#333",
    border: "none",
    borderRadius: "8px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    transform: isActive ? "scale(1.05)" : "scale(1)",
    boxShadow: isActive ? "0 4px 10px rgba(0, 0, 0, 0.2)" : "none"
  }),
  tabContent: {
    background: "white",
    padding: "2rem",
    borderRadius: "12px",
    width: "100%",
    minHeight: "400px",
    boxSizing: "border-box",
    animation: "fadeSlideIn 0.6s ease-in-out",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    overflow: "hidden"
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem"
  },
  galleryImg: {
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    cursor: "pointer"
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    fontSize: "0.875rem",
    color: "#555"
  },
  '@keyframes fadeSlideIn': {
    from: {
      opacity: 0,
      transform: "translateY(20px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0)"
    }
  }
};

const tabData = [
  { name: "About", icon: <FaUser /> },
  { name: "Skills", icon: <FaTools /> },
  { name: "Education", icon: <FaGraduationCap /> },
  { name: "Hobbies", icon: <FaGamepad /> },
  { name: "Projects", icon: <FaFolderOpen /> },
  { name: "Technologies", icon: <FaTools /> }
];

export default function ProfileWebsite() {
  const [selectedTab, setSelectedTab] = useState("About");

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
          <img
            src={myPhoto}
            alt="Your Name"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
          />
          <div>
            <h1>Java Architect Portfolio</h1>
            <p>14+ Years Experience in Java, Spring Boot, Kafka, AWS</p>
          </div>
        </div>
      </div>

      <div style={styles.navbar}>
        {tabData.map(({ name, icon }) => (
          <button
            key={name}
            style={styles.navButton(selectedTab === name)}
            onClick={() => setSelectedTab(name)}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = selectedTab === name ? "scale(1.05)" : "scale(1)")}
          >
            {icon} {name}
          </button>
        ))}
      </div>

      <div style={styles.tabContent}>
        {selectedTab === "About" && (
          <FadeInSection>
            <h2>About Me</h2>
            <p>
              Hello! I'm a passionate Java Architect with over 14 years of experience in designing, developing,
              and deploying scalable applications. I specialize in Java, Spring Boot, Kafka, and AWS Cloud Services,
              and have spent a significant part of my career building secure and high-performance banking platforms.
            </p>
            <p>
              I hold a Master of Computer Applications (MCA) degree from Bharathidasan University and have a deep
              understanding of both software engineering principles and business needs. My journey in tech has been
              driven by curiosity, continuous learning, and a drive to create impactful solutions.
            </p>
            <p>
              In my current role at Tata Consultancy Services (TCS), I lead architecture decisions, mentor development teams,
              and collaborate closely with stakeholders to deliver mission-critical systems. I take pride in transforming
              complex requirements into clean, maintainable, and efficient code.
            </p>
            <p>
              Beyond work, I enjoy exploring new technologies, contributing to knowledge sharing, and staying up-to-date
              with the latest in cloud and microservices architecture. Whether it’s optimizing performance, ensuring
              security, or innovating user experiences—I love every aspect of tech craftsmanship.
            </p>
          </FadeInSection>
        )}

        {selectedTab === "Skills" && (
          <FadeInSection>
            <h2>Technical Skills</h2>
            As a Java Architect with over 14 years of experience, I possess a broad set of technical and soft skills that enable me to drive complex projects from inception to completion. Here's an overview of my core skills:
            <ul>
              <li><strong>System Design & Architecture</strong>: Expertise in designing scalable, high-performance architectures, including microservices and cloud-based solutions. Proficient in high-level design, system integrations, and API development.</li>
              <li><strong>Java (14+ years)</strong>: In-depth experience in Java, leveraging the full power of the language across various frameworks and platforms. Skilled in object-oriented design, multi-threading, concurrency, and JVM tuning.</li>
              <li><strong>Spring Boot & Microservices</strong>: Building RESTful APIs and microservices using Spring Boot, Spring Cloud, and Spring Data. Expertise in service discovery, load balancing, fault tolerance, and distributed systems.</li>
              <li><strong>Kafka</strong>: High expertise in building scalable, event-driven systems using Apache Kafka for messaging and stream processing. Experienced in handling real-time data pipelines and integrating Kafka with various data sources.</li>
              <li><strong>AWS Cloud Solutions</strong>: Expertise in designing and deploying cloud-native applications on AWS using services such as EC2, S3, Lambda, RDS, and SQS. Familiar with infrastructure-as-code using AWS CloudFormation and Terraform.</li>
              <li><strong>Microservices Architecture</strong>: Building scalable, loosely coupled services with REST APIs, event-driven patterns, and distributed transactions.</li>
              <li><strong>CI/CD & DevOps</strong>: Proficient in setting up Continuous Integration and Continuous Delivery pipelines using Jenkins, GitLab CI, and CircleCI. Experienced in automating infrastructure and deployments using Ansible and Kubernetes.</li>
              <li><strong>Agile & Scrum Methodologies</strong>: Iterative development and continuous feedback for improved collaboration and delivery.</li>
              <li><strong>Cloud-Native Technologies</strong>: Using Docker, Kubernetes, and cloud services to design resilient, scalable applications.</li>
              <li><strong>DevOps Practices</strong>: Automating infrastructure and deployment using Terraform, Ansible, and monitoring tools like Prometheus.</li>
              <li><strong>Mentoring & Leadership</strong>: Passionate about mentoring and guiding teams to achieve their best. Adept at conducting code reviews, fostering collaborative environments, and building high-performing teams.</li>
            </ul>
          </FadeInSection>
        )}

        {selectedTab === "Education" && (
          <FadeInSection>
            <h2>Education</h2>
            <ul>
              <li><strong>Master of Computer Applications (MCA)</strong></li>
              <strong>Bharathidasan University</strong> (2003-2006) <br></br>
              During my MCA program, I gained in-depth knowledge of computer science, focusing on areas such as data structures, algorithms, software engineering, and database management. The program equipped me with a strong foundation in programming languages and computer architecture, which laid the groundwork for my career as a software engineer and architect. My final year project involved developing a scalable enterprise application using Java, which helped me develop practical skills in coding, debugging, and system design.
              <br></br><br></br>
              <li><strong>Bachelor of Science in Physics (BSc)</strong></li>
              <strong>Bharathidasan University </strong> (2000-2003) <br></br>
              My undergraduate degree in Physics honed my analytical and problem-solving skills, enabling me to approach complex technical challenges with a logical and scientific mindset. The program included subjects like classical mechanics, electromagnetism, quantum mechanics, and computational physics. Although not directly related to software development, the critical thinking and quantitative reasoning skills I developed during my BSc have been invaluable in my career as a software engineer and architect.

            </ul>
          </FadeInSection>
        )}

        {selectedTab === "Hobbies" && (
          <FadeInSection>
            <h2>Hobbies & Interests</h2>
            <ul>
              <li><strong>Technology Exploration</strong></li>
              I am passionate about staying updated with the latest advancements in technology, particularly in cloud computing, software architecture patterns, and emerging frameworks in Java and Spring Boot. I frequently explore new tools, experiment with coding techniques, and participate in technical webinars and online courses to continuously sharpen my skills.
              <br></br><br></br>
              <li><strong>Problem Solving and Competitive Programming</strong></li>
              Solving complex programming challenges has always been a hobby of mine. I enjoy participating in online coding competitions and practicing algorithmic problems, which not only keeps my problem-solving skills sharp but also enhances my ability to write optimized and efficient code.
              <br></br><br></br>
              <li><strong>Reading</strong></li>
              I have a strong interest in reading both technical and non-technical books. I enjoy reading about software architecture, microservices design patterns, cloud-native development, and leadership in technology. Outside of work-related reading, I like biographies and books that explore human psychology and history, as they help broaden my perspectives.
              <br></br><br></br>
              <li><strong>Mentoring and Knowledge Sharing</strong></li>
              I find great satisfaction in mentoring junior developers and sharing knowledge through technical discussions, code reviews, and informal sessions. Helping others grow in their careers is something I deeply value and actively pursue in my professional life.
              <br></br><br></br>
              <li><strong>Fitness and Outdoor Activities</strong></li>
              Maintaining a healthy lifestyle is important to me. I engage in regular exercise, particularly brisk walking and yoga, which helps me stay physically active and mentally focused. I also enjoy occasional weekend hiking trips that allow me to reconnect with nature and unwind from the busy work schedule.
              <br></br><br></br>
              <li><strong>Music and Movies</strong></li>
              Listening to music is a daily source of relaxation and creativity for me. I enjoy a wide variety of genres, especially classical and soft rock. I also love watching movies, particularly those based on true stories, science fiction, and inspirational themes, as they often provide fresh perspectives and ideas.
            </ul>
          </FadeInSection>
        )}

        {selectedTab === "Projects" && (
          <FadeInSection>
            <h2>Projects</h2>
            <strong>1. Monolithic to Microservices Architecture Migration</strong><br></br><br></br>
            <strong>Overview:</strong><br></br>
            Led the successful migration of a large-scale, business-critical Java monolithic application to a distributed, cloud-ready microservices architecture. The initiative aimed to improve system scalability, fault tolerance, release agility, and operational efficiency.<br></br><br></br>
            <strong>Problem Statement:</strong><br></br>  
            The monolithic application faced challenges like slow deployments, scaling bottlenecks, difficulty in onboarding new features, and high coupling between modules.<br></br><br></br>

            <strong>Solution:</strong>
            <ul>
              <li>Architected a microservices-based design using Spring Boot, Spring Cloud, and Docker.</li>
              <li>Defined service boundaries based on business capabilities following Domain-Driven Design (DDD).</li>
              <li>Implemented API Gateway for centralized routing and security using Spring Cloud Gateway.</li>
              <li>Adopted Kafka for asynchronous communication and event-driven integration between services.</li>
              <li>Enabled CI/CD pipelines using Jenkins and Kubernetes for seamless deployment.</li>
            </ul>
            <strong>Tech Stack:</strong>
            Java, Spring Boot, Spring Cloud, Kafka, Docker, Kubernetes, AWS EC2, API Gateway, Redis.
            <br></br>
            <strong>Outcome:</strong>
            <ul>
              <li>Deployment frequency increased by 5x.</li>
              <li>System availability improved to 99.99%.</li>
              <li>Reduced the average onboarding time for new developers by 30%.</li>
            </ul>
            <strong>Key Artifacts:</strong>
            <ul>
              <li>Architecture Diagrams (Before and After)</li>
              <li>Deployment Flow</li>
              <li>Event-Driven Communication Sample</li>
            </ul>
            <strong>2. Data Migration: DB2 to AWS RDS (PostgreSQL)</strong><br></br><br></br>
            <strong>Overview:</strong><br></br>
            Successfully migrated critical transactional and reporting data from legacy IBM DB2 databases to AWS-managed RDS PostgreSQL services.<br></br><br></br>
            <strong>Problem Statement:</strong><br></br>  
            The on-premise DB2 system was costly to maintain, lacked modern capabilities, and hindered application scalability and reliability.<br></br><br></br>
            <strong>Solution:</strong>
            <ul>
              <li>
                Analyzed and mapped DB2 schemas, stored procedures, and triggers to PostgreSQL equivalents.
              </li>
              <li>
              Automated data extraction and transformation using AWS DMS (Database Migration Service) and custom Spring Boot utilities.
              </li>
              <li>
              Set up validation scripts to ensure data consistency and integrity post-migration.
              </li>
              <li>
              Scheduled cutover with minimal downtime by using CDC (Change Data Capture) during the migration window.
              </li>              
            </ul>
            <strong>Tech Stack:</strong>
            AWS RDS (PostgreSQL), AWS DMS, Java, Spring Boot, Liquibase, Flyway, S3, Lambda.
            <br></br>
            <strong>Outcome:</strong>
            <ul>
              <li>Migrated 15+ TB of data with zero data loss.</li>
              <li>Reduced infrastructure costs by 40% annually.</li>
              <li>Improved database query performance by 20-30% post-migration.</li>
            </ul>
            <strong>Key Artifacts:</strong>
            <ul>
              <li>Data Mapping Documents</li>
              <li>Pre/Post-Migration Checklist</li>
              <li>Validation Report</li>
            </ul>
          </FadeInSection>
        )}

        {selectedTab === "Technologies" && (
          <FadeInSection>
            <h2>Key Technologies</h2>
            Over the years, I have had the privilege of working with a range of technologies that have allowed me to build innovative and efficient solutions. Below is a list of key technologies I have mastered:
            <ul>
              <li><strong>Java</strong>: The backbone of my development career, used to build everything from small applications to large-scale enterprise systems.</li>
              <li><strong>Spring Framework (Spring Boot, Spring Cloud)</strong>: I utilize the Spring framework for building secure, scalable, and efficient web applications and microservices.</li>
              <li><strong>Apache Kafka</strong>: A pivotal tool for creating event-driven architectures, ensuring high-throughput, fault-tolerant, and real-time data streaming.</li>
              <li><strong>AWS</strong>: Using the cloud platform for deploying and managing applications at scale. I work with various services like EC2, S3, RDS, Lambda, and more.</li>
              <li><strong>Docker & Kubernetes</strong>: Containerization and orchestration of services to improve scalability and deployment pipelines in cloud environments.</li>
              <li><strong>CI/CD Tools (Jenkins, GitLab CI, CircleCI)</strong>: Enabling rapid delivery of software through automation of build, test, and deployment processes.</li>
              <li><strong>Microservices & Cloud-Native Architecture</strong>: Designing applications that are modular, easy to maintain, and scalable. Expertise in creating cloud-native solutions that are highly available and fault-tolerant.</li>
              <li><strong>Relational & NoSQL Databases (MySQL, MongoDB, PostgreSQL)</strong>: Proficient in designing and managing databases to support high-volume applications, including SQL and NoSQL databases.</li>
              <li><strong>Version Control (Git, GitHub, GitLab)</strong>: Essential for collaborative development, version control, and code management.</li>
              <li><strong>Agile & Scrum</strong>: Experienced in Agile methodologies, ensuring quick releases, iterative development, and continuous improvement through Scrum practices.</li>
            </ul>
          </FadeInSection>
        )}
      </div>
    </div>
  );
}
