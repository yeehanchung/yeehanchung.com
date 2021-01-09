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
        <h1>
          Resume
        </h1>
        <P size="xSmall">
          <Span>{"December 01, 2020"}</Span>
          <Span>{"3 min read"}</Span>
        </P>
      
        <h2>Professional Experience</h2>

        <h3>Incoming Software Engineer Intern @ Fusionex International</h3>

        <h4>Jan 2021 - May 2021 | Petaling Jaya, Malaysia</h4>

        <h2>Education</h2>

        <h3>INTI International University + Coventry University, UK</h3>

        <h4>Apr 2018 - May 2021 | Malaysia</h4>

        <li>B. Computer Science, majoring in Software Engineering</li>
        <li>CGPA: 3.85/4.00 (First Class Honours)</li>

        <h2>Projects</h2>

        <h3>Industry Final Year Project</h3>
        <h4>
          Web-based Commercial and Blog Systems | Individual Full-stack Project
        </h4>

        <li>Full software development life cycle</li>
        <li>
          Fulfilled user requirements and developed 2 systems for Sausage KL
          Café & Deli
        </li>
        <li>
          React.js, Redux, Gatsby, GraphQL, Firebase, Node.js, Netlify, Heroku,
          GitHub, and more
        </li>

        <br />
        <h3>Covid-19 Medicine Mobile Apps with QR Code Scanner</h3>
        <h4>2 Android Apps | Team-based</h4>

        <li>Team lead, full-stack developer, marketer</li>
        <li>
          Java, XML, Firebase, Covid-19 API, Android Studio, Microsoft Forms,
          Microsoft Power Automate, Microsoft Power BI, GitHub
        </li>

        <br />
        <h3>Coca-Cola Automation Employer Project</h3>
        <h4>Digitalisation Project | Team-based | 1st Runner Up</h4>

        <li>Team lead, full-stack developer, marketer</li>
        <li>Developed attractive landing pages and MySQL CRUD features</li>
        <li>HTML, CSS, SQL, PHP, Bootstrap, phpMyAdmin, PhpStorm, FileZilla</li>

        <h2>Publication</h2>

        <h4>
          A Study of Software Quality Assurance Perspective on E-commerce System
          Development
        </h4>

        <li>Under review</li>
        <li>Expected to be published in SCOPUS indexed journal in 2021</li>

        <h2>Leadership Experience</h2>

        <h3>Microsoft Malaysia</h3>
        <h4>Apr 2019 - Sep 2020</h4>

        <li>
          <strong>Modern Workplace Squad</strong> member
        </li>
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

        <h3>INTI International University</h3>
        <h4>Jul 2018 - Dec 2020</h4>

        <li>
          <strong>Student Leader Ambassador</strong>
        </li>
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

        <h4>Jan 2019 - Nov 2019</h4>
        <li>
          <strong>IT Club Program Master</strong>
        </li>
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

        <h2>Awards and Achievements</h2>

        <table>
          <tr>
            <td>
              <h3>2020</h3>
            </td>
            <td>
              <li>6 consecutive Dean's List</li>
            </td>
          </tr>
        </table>
      </Post>
    </Container>
  )
}

export default singlePost
