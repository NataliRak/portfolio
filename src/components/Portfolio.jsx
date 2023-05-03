import React from "react";
import styled from "styled-components";
import Title from "./Title";

import loadmore from "assets/loadmore.png";
import portfolio1 from "assets/portfolio1.png";
import portfolio2 from "assets/portfolio2.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { portfolioAnimation } from "animations";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./Projects/ProjectsStyles";

import { projects } from "../constans/constans";
import { nodeProjects } from "../constans/constans";
import { phpProjects } from "../constans/constans";
function Portfolio() {
  const [element, controls] = useScroll();
  return (
    <Section id="portfolio" ref={element}>
      <Title value="Portfolio" />
      <div className="background">
        <img src={portfolio1} alt="Design" className="design1" />
        <img src={portfolio2} alt="Design" className="design2" />
      </div>

      <div className="portfolio__title">
        <p>My Work</p>
        <h2>NodeJS projects</h2>
      </div>
      <div className="grid">
        {/* <motion.div
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          whileInView={{ opacity: 1 }}
        > */}
        <GridContainer>
          {nodeProjects.map((p, i) => {
            return (
              <BlogCard key={i}>
                <Img src={p.image} />

                <HeaderThree title={p.title}>{p.title}</HeaderThree>
                <Hr />

                <CardInfo className="card-info">{p.description}</CardInfo>
                <div>
                  <TitleContent>Tech Stack</TitleContent>
                  <Hr />
                  <TagList>
                    {p.tags.map((t, i) => {
                      return <Tag key={i}>{t}</Tag>;
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={p.source}>Source Code</ExternalLinks>
                </UtilityList>
              </BlogCard>
            );
          })}
        </GridContainer>
        {/* </motion.div> */}
      </div>

      <div className="portfolio__title">
        <p>My Work</p>
        <h2>React and JavaScript projects</h2>
      </div>
      <div className="grid">
        {/* <motion.div
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          whileInView={{ opacity: 1 }}
        > */}
        <GridContainer>
          {projects.map((p, i) => {
            return (
              <BlogCard key={i}>
                <Img src={p.image} />

                <HeaderThree title={p.title}>{p.title}</HeaderThree>
                <Hr />

                <CardInfo className="card-info">{p.description}</CardInfo>
                <div>
                  <TitleContent>Tech Stack</TitleContent>
                  <Hr />
                  <TagList>
                    {p.tags.map((t, i) => {
                      return <Tag key={i}>{t}</Tag>;
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
                  <ExternalLinks href={p.source}>Source Code</ExternalLinks>
                </UtilityList>
              </BlogCard>
            );
          })}
        </GridContainer>
        {/* </motion.div> */}
      </div>

      <div className="portfolio__title">
        <p>My Work</p>
        <h2>PHP projects</h2>
      </div>
      <div className="grid">
        {/* <motion.div
          variants={portfolioAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          whileInView={{ opacity: 1 }}
        > */}
        <GridContainer>
          {phpProjects.map((p, i) => {
            return (
              <BlogCard key={i}>
                <Img src={p.image} />

                <HeaderThree title={p.title}>{p.title}</HeaderThree>
                <Hr />

                <CardInfo className="card-info">{p.description}</CardInfo>
                <div>
                  <TitleContent>Tech Stack</TitleContent>
                  <Hr />
                  <TagList>
                    {p.tags.map((t, i) => {
                      return <Tag key={i}>{t}</Tag>;
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
                </UtilityList>
              </BlogCard>
            );
          })}
        </GridContainer>
        {/* </motion.div> */}
      </div>

      <div className="portfolio-more">
        <span>Load More</span>
        <img src={loadmore} alt="Load More" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding: 2rem 0;
  background-color: var(--secondary-color);
  .background {
    position: relative;
    .design1 {
      position: absolute;
      z-index: 1;
      right: 8%;
      top: 0;
    }
    .design2 {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 30rem;
      height: 40rem;
    }
  }
  .sideTitle {
    z-index: 2;
    h1 {
      color: white;
    }
  }
  .portfolio__title {
    margin: 6rem 15rem;
    p {
      color: var(--primary-color);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: white;
      font-size: 2rem;
    }
  }
  .grid {
    padding: 0 15rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .portfolio-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 4rem 0;
    span {
      color: white;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    .portfolio__title {
      margin: 0;
      padding: 0 2rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
      }
    }
    .grid {
      padding: 2rem 0.3rem;
      grid-template-columns: 1fr;
    }
  }
`;

export default Portfolio;
