import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import home from "assets/home.png";
import play from "assets/play.png";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animations";
import { socialMediaLinks } from "portfolio";

import {
  BsFacebook,
  BsTelegram,
  BsLinkedin,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";

export default function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        className="home"
      >
        <div className="content">
          <div className="title">
            <h1>Hello, my name is Natali.</h1>
            <h2> I am a Front-End Developer located in Israel.</h2>
          </div>
          <div className="subTitle">
            <p>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️ <br />
              My field of Interest's are building new Web Technologies and
              Products and also in areas related to Deep Learning and Natural
              Launguage Processing. Whenever possible, I also apply my passion
              for developing products with Node.js and Modern Javascript Library
              and Frameworks like React.js
            </p>
          </div>
          <img src={play} alt="Play Button" />
        </div>
      </motion.div>
      <motion.div
        className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="grid">
          <div className="col">
            <strong>Email</strong>
            <p>natali.rak911@gmail.com</p>
          </div>
          <div className="col">
            <div className="footer__social__icons">
              <strong>Social</strong>
              <p>
                {" "}
                <a href={socialMediaLinks.telegram}>
                  <BsTelegram />
                </a>
                <a href={socialMediaLinks.facebook}>
                  <BsFacebook />
                </a>
                <a href={socialMediaLinks.linkedin}>
                  <BsLinkedin />
                </a>
                <a href={socialMediaLinks.github}>
                  <BsGithub />
                </a>
                <a href={socialMediaLinks.instagram}>
                  <BsInstagram />
                </a>
              </p>
            </div>
          </div>
          <div className="col">
            <strong>Mobile</strong>
            <p>+97253 2318300</p>
          </div>
          <div className="col">
            <strong>Address</strong>
            <p>Nahariya, Israel</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      margin-top: 8rem;
      width: 60%;
      .title {
        h1 {
          font-size: 3rem;
          line-height: 2.3rem;
        }
        h2 {
          font-size: 1.7rem;
          line-height: 3.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 2rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem;
      color: white;
      font-size: 18px;
    }
  }
  .footer__social__icons {
    gap: 2rem;

    svg {
      font-size: 1.8rem;
      color: white;
      margin-right: 1rem;
      margin-top: 1rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: var(--primary-color);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;
