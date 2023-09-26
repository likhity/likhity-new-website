import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.scss'

import { Image, Row, Col, Container } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";

import NavBar from '../components/NavBar';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

import projects from "../data/projects";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hello! My name is Likhit Vyas Yarramsetti. I am currently a junior at ASU studying Computer Science and a future full-stack software engineer and filmmaker. Thank you for taking the time to check out my stuff!" />
        <title>Likhit Vyas Yarramsetti</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        </style>
      </Head>

      <main className="main">
        <NavBar delayedAnimation={true} />
        <section className={styles.header}>
          <div className={styles.title}>
            <p className={styles.typing}>Hello, my name is</p>
            <h1 className={styles.nameTitle}><span className="accent">Likhit Vyas</span> Yarramsetti</h1>
            <p className={styles.nameSubtitle}>Software Engineer</p>
          </div>
          <div className={styles.downPointer}>
            <BsChevronDown />
          </div>
        </section>
        <section className={styles.introduction}>
          <Container fluid="sm">
            <Row className="align-items-center justify-content-around me-0">
              <Col xs={12} sm={12} md={4}>
                <Image src="/headshot.jpg" alt='Head shot photo of Vyas' className={`img-fluid ${styles.headshot} mb-5 mb-md-0`}></Image>
              </Col>
              <Col xs={12} sm={12} md={7}  className="">
                <h2 className={`mb-4 ${styles.sentence}`}>Yeah, I kinda have a long name. You can call me <span className={`fw-bold accent`}>Vyas.</span></h2>
                <p>I'm a software engineer.</p>
                <p>I've been learning about and building software for over 5 years.</p>
                <p>I first started building 3D games using the Unity game engine in 2016. Today, I mostly develop web applications using technologies like React, Node.js, Flask, PostgreSQL and MongoDB to name a few.</p>
                <p>As a hobby, I enjoy learning about film and filmmaking.</p>
                {/* <Link href="/journey">
                  <a className='button mt-4'>Learn more about my experience</a>
                </Link> */}
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.experience}>
          <h2 className={`mb-5 fw-bold ${styles.sentence} text-center`}>Where I've <span className="accent">Worked.</span></h2>
          <Timeline>
            <Timeline.Left start={true} timeText="May 2022 - August 2022">
              <h3 className="h1 mb-4">React/TypeScript Intern <span className='accent'>@ <a href="https://iqm.com/">IQM Corporation</a></span></h3>
              <ul className="accentList">
                <li>Wrote modern, performant code in TypeScript, React, and SASS for the company's main suite of ad campaign management web apps.</li>
                <li>Worked in an agile environment using Git, BitBucket, Jenkins, Jira & Confluence.</li>
                <li>Developed new features and performed numerous bug fixes that improved clients' user experience.</li>
                <li>Worked on a complete overhaul of the main website (<a href="https://iqm.com/">iqm.com</a>) using Remix.js and Bootstrap.</li>
              </ul>
            </Timeline.Left>
            <Timeline.Right timeText="August 2023 - Present">
              <h3 className="h1 mb-4">CS Instructor <span className='accent'>@ <a href="https://icodeschool.com/">iCode Chandler</a></span></h3>
              <ul className="accentList">
                <li>Teaching introductory engineering concepts, robotics, programming using Block code languages (Scratch/Vex Go) and basic web development (HTML/CSS) to children of ages 8-10.</li>
              </ul>
            </Timeline.Right>
            <Timeline.Left end={true} timeText="Present">
              <h3 className="h1">Looking for Summer 2024 internship opportunities.</h3>
              <p>
                <Link href="/contact" target="_blank">
                  <a>Get In Touch<HiOutlineExternalLink /></a>
                </Link>
              </p>
            </Timeline.Left>
          </Timeline>
        </section>
        <section className={styles.education}>
          <Container fluid="sm">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={7}  className="me-0 me-md-5">
                <h2 className={styles.sentence}>I'm currently a <span className={`accent`}>senior</span> studying <span className={`d-block mt-2 mb-2 code`}>Computer Science</span> at <span className={`fw-bold accent`}>Arizona State University</span>.</h2>
                <p className='mt-4'>I am also pursuing an M.S. degree in Robotics & Autonomous Systems (AI).</p>
                <p>Expecting to graduate May 2025.</p>
                <h4 className="fw-bold mt-5 mb-3">Favorite Courses</h4>
                <ul>
                  <li>Data Structures &amp; Algorithms</li>
                  <li>Theoretical Computer Science</li>
                  <li>Linear Algebra</li>
                  <li>Probability &amp; Statistics</li>
                </ul>
                <h4 className="fw-bold">Current GPA: <span className={`accent`}>3.83</span></h4>
              </Col>
              <Col>
                <Image src="/asu.jpg" alt='Vyas walking in ASU campus' width={500} className="img-fluid mt-4 mt-md-0"></Image>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.skillsSection}>
          <h2 className={`${styles.sentence} text-center`}>Yeah, I got <span className="fw-bold accent">Skills.</span></h2>
          <ul className={styles.skills}>
            <li className={`h1 ${styles.skill}`}>HTML/CSS <p>3 years</p></li>
            <li className={`h1 ${styles.skill}`}>JS <p>2.5-3 years</p></li>
            <li className={`h1 ${styles.skill}`}>React <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>Node.js <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>Express <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>MongoDB <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>Git <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>Sass <p>1.5 years</p></li>
            <li className={`h1 ${styles.skill}`}>TypeScript <p>6 months</p></li>
          </ul>
        </section>
        <section className={styles.projectsSection}>
          <h2 className={`${styles.sentence} text-center`}>Some <span className="fw-bold accent">Projects</span> I've Built.</h2>
          <Projects projects={projects.slice(0, 9)} />
          <Link href="/projects">
            <a className="button mt-5">See More</a>
          </Link>
        </section>
        <section className={styles.contact}>
          <h2 className={`${styles.sentence} text-center mb-5`}>Let's <span className="fw-bold accent">Talk.</span></h2>
          <p className='mt-5'>I am currently looking for Summer 2024 internship opportunities.</p>
          <p className="mb-5" >My inbox is always open.</p>
          <Link href="/contact">
            <a className="button mt-5">Contact Me</a>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
