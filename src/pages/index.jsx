import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.div`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Kishan Kumar.
        </BigTitle>
        <Subtitle></Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title> ☆ Blogs ☆ </Title>
        <ProjectsWrapper>
          <ProjectCard
            title="JavaScript"
            link="https://javascript.info/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Learn some JavaScript 
          </ProjectCard>
          <ProjectCard
              title="Check out more @"
              link="https://linktr.ee/kishankumar"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Kishan Kumar" />
          <AboutSub>
           Know more about me, below !
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Technical Skills:
          <ul>
            <li>JavaScript</li>
            <li>Frameworks: Angular, React, Express(Node)</li>
            <li>Java &amp; </li>
            <li>Docker</li>
          </ul>

          Want to hire me? Find my <a href="https://resume.creddle.io/resume/872ylplc40w" target="_blank">Resume</a>
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:kishan.93k@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/kishannr/">LinkedIn</a>,{' '}
            <a href="https://twitter.com/kishan_nr">Twitter</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019.{' '}
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
