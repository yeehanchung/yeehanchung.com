import React from "react"
import { H1, P, A } from "../elements"
import { Container, Content, Seo } from "../components"
// import myPhoto from "../img/yeehanchung-casual.jpg"

export default () => {
  return (
    <Container>
      <Seo title="YeeHan Chung's Homepage" />
      <Content>
        <H1 textAlign="left" margin=" 0 1rem 0">
          YeeHan Chung
        </H1>
        <br />
        <P lineHeight="medium">
          Hello there, my name is Chung Yee Han, and if you're curious about my
          Chinese name, here you go, 钟易翰 (zhōng yī hàn). Live in Selangor,
          Malaysia, but originally from East Malaysia, Sandakan, Sabah.
        </P>
        <br />
        <P lineHeight="medium">
          I enjoy spending my time on the Internet, doing web development stuff,
          which I keep them on{" "}
          <A
            href="https://yeehan.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            yeehan.dev
          </A>{" "}
          and blogging some of my life events here.
        </P>
        <br />
        <P lineHeight="medium">
          Video games played a huge part of my life, but seldom play after
          starting my foundation in April 2017.
        </P>
      </Content>
    </Container>
  )
}
