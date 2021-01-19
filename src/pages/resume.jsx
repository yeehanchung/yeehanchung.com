import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { FooterSocialIcons, H1, P } from "../elements"
import {
  Container,
  Post,
  Seo,
  Button,
  InnerIcon,
  // ContentCard,
  // Content,
} from "../components"
import cocaCola from '../img/coca-cola.jpg';
import styled from "styled-components"

const Span = styled.span`
  padding: 0 1rem 0 0rem;
`

const singlePost = ({ data }) => {
  return (
    <Container>
      <Seo
        title="YeeHan Chung's Resume"
        description={
          "After completing all my school assignments in my last semester and at least 10 days prior final examination, I decided to take a small break and embarked to build my personal website using Gatsby, Google Analytics, and other fun stuff. At the same time, uploaded my digital resume here."
        }
      />
      <Post>
        <P style={{ fontSize: "1.5rem", marginBottom: "1.5rem", fontWeight: 'bold'}}>Resume</P>
        <P size="xSmall" color="dark2">
          <Span>{"Last updated: 19 January, 2021"}</Span>
        </P>
        {/* Professional Experience */}
        <h2>Professional Experience</h2>
        <h3>Software Engineer Intern @ Fusionex International</h3>
        <h4>Jan 2021 - Present | Petaling Jaya, Malaysia</h4>
        <li>Software development</li>
        <li>Web application development</li>
        <li>Support SIT (System Integration Testing)</li>
        <li>Support UAT (User Acceptance Testing)</li>
        {/* Education */}
        <h2>Education</h2>
        <h3>INTI International University + Coventry University, UK</h3>
        <h4>Apr 2018 - May 2021 | Malaysia</h4>
        <li>B. Computer Science, majoring in Software Engineering</li>
        <li>CGPA: 3.85/4.00 (First Class Honours)</li>
        {/* Projects */}
        <h2>Projects</h2>
        {/* 1st project */}
        <h3>
          Industry Final Year Project with{" "}
          <a
            href="https://www.facebook.com/sausagekl/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sausage KL Café & Deli
          </a>
        </h3>
        <h4>Individual Full-stack Project</h4>
        <li>Developed mobile-responsive E-commerce and Blog Systems</li>
        <li>Full software development life cycle</li>
        <li>
          Fulfilled user requirements with ISO 25010 software quality model
        </li>
        <li>
          Technologies: React.js, Redux, Gatsby, GraphQL, Firebase, Node.js,
          Netlify, Heroku, GitHub
        </li>
        <li>Products: (1){" "}<a
            href="http://www.sausagekl.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            E-commerce system
          </a>, (2) <a
            href="https://www.blog.sausagekl.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Blog system
          </a></li>
        <br />
        {/* 2nd project */}
        <h3>Covid-19 Medicine + QR Code Scanner Android Apps</h3>
        <h4>Team-based Project</h4>
        <li>Being a team lead, solution architect, full-stack developer and presenter</li>
        <li>
          Technologies: Java, XML, Firebase, Covid-19 API, Android Studio,
          Microsoft Forms, Microsoft Power Automate, Microsoft Power BI, GitHub
        </li>
        <li>GitHub repo: (1){" "}<a
            href="https://github.com/cyeehan/medicine-covid-19-health-check"
            rel="noopener noreferrer"
            target="_blank"
          >
            Medicine app
          </a>, (2) <a
            href="https://github.com/cyeehan/medicine-qr-code-scanner"
            rel="noopener noreferrer"
            target="_blank"
          >
            QR Code Scanner app
          </a></li>
        <br />
        {/* Publication */}
        <h2>Publication</h2>
        <h4>
          A Study of Software Quality Assurance Perspective on E-commerce System
          Development
        </h4>
        <li>Under review</li>
        <li>Expected to be published in SCOPUS indexed journal in 2021</li>
        {/* Leadership experience */}
        <h2>Leadership Experience</h2>
        <h3>Modern Workplace Ambassador @ Microsoft Malaysia</h3>
        <h4>Apr 2019 - Sep 2020 | Kuala Lumpur, Malaysia</h4>
        <li>
          Worked closely with Adoption Specialist and Operation Teams to drive
          Microsoft Teams consumption
        </li>
        <li>
          Increased over 700 Microsoft Teams accounts activation during 1-day
          during excitement day in ASTRO Broadcast Centre in which Microsoft
          Malaysia won an award at the event
        </li>
        <li>
          Organized 3-day Microsoft Virtual Bootcamp and Recruitment Session for
          over 170 INTI students, and also involved 5 Microsoft Malaysia Staff
          and 2 INTI Career Services Staff
        </li>
        <li>
          Led squad members to organize boot camps, gathering sessions, and
          recruitment sessions. Documentation using Git repository. Conducted
          and facilitated virtual and physical training sessions for over 150+
          INTI students across campuses
        </li>
        <br />
        <h3>Student Leader Ambassador @ INTI International University</h3>
        <h4>Jul 2018 - Dec 2020 | Negeri Sembilan, Nilai</h4>
        <li>Interviewer for recruitment of new Student Leader Ambassadors.</li>
        <li>
          Moderated Virtual Hiring Session with Exabytes Group and Din Tai Fung,
          and assisted other sessions during INTI's Virtual Career Fair 2020
        </li>
        <li>
          Founder Résumé Clinic Squad. Led 13 Student Ambassadors to provide
          résumé writing tips & tricks to over 80 INTI students
        </li>
        <li>
          Organizing Committee of 3 Career Fairs. Head of Multimedia, production
          of 2 Career Fair Opening Ceremony videos and interview videos using
          Adobe Premiere Pro. Designed 3 posters using Photoshop
        </li>
        <li>
          Facilitated 5 Industry Advisory Boards, and took care of hospitality.
          Facilitated 5 Career Preparation Workshops, and registration of
          participating industry partners at INTI Partnership Appreciation
          Dinner
        </li>
        <br />
        <h3>Program Master @ INTI International University IT Club</h3>
        <h4>Jan 2019 - Nov 2019 | Negeri Sembilan, Nilai</h4>
        <li>
          Coordinator of Microsoft Office 365 Training with over 60 INTI
          students
        </li>
        <li>
          Chair-organized Python Programming Workshop for 20 INTI students
        </li>
        <li>
          Program Master of Arduino Programming Workshop for 80 INTI students
        </li>
        {/* Awards and Achievements */}
        <h2>Awards and Achievements</h2>
        <table>
          {/* Add new here */}
          <tr>
            <td>
              <h3>2020</h3>
            </td>
            <td>
              <li>1st Runner Up - Coca-Cola Automation Employer Project</li>
              <li>
                Being a team lead, full-stack developer and
                presenter
              </li>
              <li>Digitised at least 20 physical registration forms</li>
              <li>
                Developed a login system and an administrative dashboard with
                CRUD operations
              </li>
              <li>
                Pitched final system to Coca-Cola Malaysia Managing Director,
                and employers
              </li>
              <li>
                Technologies: HTML, CSS, SQL, PHP, Bootstrap, phpMyAdmin, and
                PhpStorm
              </li>
              <img src={cocaCola} alt="Girl in a jacket"/>
            </td>
          </tr>
        </table>
      </Post>
    </Container>
  )
}

export default singlePost
