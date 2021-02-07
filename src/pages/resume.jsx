import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container, Post, Seo } from "../components"
import { P } from "../elements"
import cocaCola from "../img/coca-cola.jpg"
import "../styles/styles.css"

const Span = styled.span`
  padding: 0 1rem 0 0rem;
`
const InnerIcon = styled.a`
  text-align: center;
`

const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin: 2rem 0 2rem 0;
  transition: all 0.5s;
  text-align: center;

  /* Targeting individual img */
  img {
    margin: 10px;
    height: 30px;
    padding: 0 3rem;
    transition: filter 0.3s;
  }

  img:hover,
  img:focus {
    transition: all 0.3s;
    filter: brightness(40%);
    /* transform: translateY(-2px); */
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero_img.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      whatsapp: file(relativePath: { eq: "whatsapp.svg" }) {
        publicURL
      }
      email: file(relativePath: { eq: "email.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <Container>
      <Seo title="YeeHan Chung's Resume" description={"After completing all my school assignments in my last semester and at least 10 days prior final examination, I decided to take a small break and embarked to build my personal website using Gatsby, Google Analytics, and other fun stuff. At the same time, uploaded my digital resume here."}/>
      <Post>
        <P style={{fontSize: "1.5rem", marginBottom: "1.5rem", fontWeight: "bold",}}>Resume</P>
        <P size="xSmall" color="dark2"><Span>{"7 February, 2021"}</Span></P>
        <FooterSocialIcons>
          <InnerIcon className="social-icon" href="https://github.com/cyeehan" target="_blank" rel="noopener noreferrer">
            <img src={data.github.publicURL} alt="GitHub" />
          </InnerIcon>
          <InnerIcon className="social-icon" href="https://www.linkedin.com/in/cyeehan/" target="_blank" rel="noopener noreferrer">
            <img src={data.linkedin.publicURL} alt="Linkedin" />
          </InnerIcon>
          <InnerIcon className="social-icon" href="https://www.facebook.com/chungyhan/" target="_blank" rel="noopener noreferrer">
            <img src={data.facebook.publicURL} alt="Facebook" />
          </InnerIcon>
          <InnerIcon className="social-icon" href="https://www.instagram.com/cyee_han" target="_blank" rel="noopener noreferrer">
            <img src={data.instagram.publicURL} alt="Instagram" />
          </InnerIcon>
        </FooterSocialIcons>
        {/* Professional Experience */}
        <h2>Professional Experience</h2>
        <h3>Software Engineer Intern @ Fusionex International</h3>
        <h4>Jan 2021 - Present | Petaling Jaya, Malaysia</h4>
        <li>Software and web application developments in the core team.</li>
        <li>Support SIT (System Integration Testing) and UAT (User Acceptance Testing).</li>
        <li>API integration, technical/non-technical documentation and system optimization.</li>
        <li>Tech stack: WordPress (PHP, JavaScript, jQuery/Ajax), Express.js (Node.js), REST API.</li>
        {/* Education */}
        <h2>Education</h2>
        <h3>INTI International University + Coventry University, UK</h3>
        <h4>Apr 2018 - May 2021 | Malaysia</h4>
        <li>Bachelor of Computer Science, majoring in Software Engineering.</li>
        <li>CGPA: 3.85/4.00 (First Class Honours).</li>
        {/* Projects */}
        <h2>Projects</h2>
        {/* 1st project */}
        <h3>Final Year Employer Project with{" "}
          <a href="https://www.facebook.com/sausagekl/" rel="noopener noreferrer" target="_blank">Sausage KL Café & Deli</a>
        </h3>
        <h4>Individual Full-stack Project</h4>
        <li>Developed E-commerce and Blog mobile-responsive web apps.</li>
        <li>Helped Sausage KL to gain MYR 641 and accumulated 185 views within 8 days.</li>
        <li>Involved in full SDLC (Software Development Life Cycle).</li>
        <li>Fulfilled user requirements together with ISO 25010 software quality model.</li>
        <li>Tech stack for: React.js, Redux, Gatsby, GraphQL, Firestore, Google Analytics, GitHub, Netlify, Heroku.</li>
        <li>Websites: (1){" "}
          <a href="http://www.sausagekl.com/" rel="noopener noreferrer" target="_blank">www.sausagekl.com</a>
          , (2){" "}
          <a href="https://www.blog.sausagekl.com/" rel="noopener noreferrer" target="_blank">blog.sausagekl.com</a>
        </li>
        <br />
        {/* 2nd project */}
        <h3>Covid-19 Medicine + QR Code Scanner Android Apps</h3>
        <h4>Team-based Project</h4>
        <li>Responsible for leading a team of 3, architecting solutions, developing, documenting, and pitching final products.</li>
        <li>Tech stack: Java, XML, Firebase, Covid-19 API, GitHub, Android Studio, Microsoft Forms, Power Automate, Power BI.</li>
        <li>GitHub repo: (1){" "}
          <a href="https://github.com/cyeehan/medicine-covid-19-health-check" rel="noopener noreferrer" target="_blank">Medicine app</a>
          , (2){" "}
          <a href="https://github.com/cyeehan/medicine-qr-code-scanner" rel="noopener noreferrer" target="_blank">QR Code Scanner app</a>
        </li>
        <br />
        {/* Publication */}
        <h2>Publication</h2>
        <h4>A Study of Software Quality Assurance Perspective on E-commerce System Development</h4>
        <li>Main author. Paper is under reviewed by a publisher from USA.</li>
        <li>Expected to be published in SCOPUS indexed journal in 2021.</li>
        {/* Leadership experience */}
        <h2>Leadership Experience</h2>
        <h3>Modern Workplace Ambassador @ Microsoft Malaysia</h3>
        <h4>Apr 2019 - Present | Kuala Lumpur, Malaysia</h4>
        <li>Worked closely with Adoption Specialist and Operation Teams to drive Microsoft Teams consumption.</li>
        <li>Led and organized various impactful events as one of the two Squad Leaders for 3 months.</li>
        <li>Increased over 700 Microsoft Teams account activation, and Microsoft Malaysia winning an award for the event.</li>
        <li>Organized 3-day Virtual Bootcamp & Recruitment Sessions for over 170 students and received 4.68/5 avg. rating.</li>
        <br />
        <h3>Student Leader Ambassador @ INTI International University</h3>
        <h4>Jul 2018 - Present | Negeri Sembilan, Nilai</h4>
        <li>Interviewed 30+ undergraduate and graduate students during recruitment of new Leader Ambassador.</li>
        <li>Moderated Virtual Hiring Session with Exabytes Group and Dim Tai Fung in Virtual Career Fairs 2020.</li>
        <li>Led a team of 13 to provide résumé writing tips & tricks to over 80 INTI students to increase employability.</li>
        <li>Professionally produced 2 Career Fair and 5 interview videos using Adobe Premiere Pro. Designed 3 posters using Photoshop.</li>
        <li>Facilitated 5 Industry Advisory Board events and INTI’s Partnership Appreciation Dinner.</li>
        <br />
        <h3>Program Master @ INTI International University IT Club</h3>
        <h4>Jan 2019 - Nov 2019 | Negeri Sembilan, Nilai</h4>
        <li>Coordinator of Microsoft Office 365 Training with over 60 INTI students.
        </li>
        <li>Chair-organized Python Programming Workshop for 20 INTI students.</li>
        <li>Program Master of Arduino Programming Workshop for 80 INTI students.</li>
        {/* Awards and Achievements */}
        <h2>Awards and Achievements</h2>
        <table>
          {/* Add new here */}
          <tr>
            <td>
              <h3>2020</h3>
            </td>
            <td>
              <li>1st Runner Up - Coca-Cola Automation Employer Project.</li>
              <li>Being a team lead, full-stack developer and presenter.</li>
              <li>Digitised at least 20 physical registration forms.</li>
              <li>Developed a login system and an administrative dashboard with CRUD operations.</li>
              <li>Pitched final system to Coca-Cola Malaysia Managing Director and employers.</li>
              <li>Technologies: HTML, CSS, SQL, PHP, Bootstrap, phpMyAdmin, PhpStorm.</li>
              <img className="resume-img" src={cocaCola} alt="Girl in a jacket"/>
            </td>
          </tr>
        </table>
      </Post>
    </Container>
  )
}