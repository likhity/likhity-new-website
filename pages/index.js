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
        <meta name="description" content="Hello! My name is Likhit Vyas. I am currently a senior at ASU studying Computer Science and a future full-stack software engineer and filmmaker. Thank you for taking the time to check out my stuff!" />
        <title>Likhit Vyas </title>
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
            <p className={styles.nameSubtitle}>Computer Science <span className='accent'>@</span> ASU <span className="accent">+</span> Intern <span className='accent'>@</span> Edwards Lifesciences</p>
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
                <h2 className={`mb-4 ${styles.sentence}`}>Yeah, I kinda have a long name. You can call me <span className={`fw-bold accent`}>Vyas</span>.</h2>
                <p>I'm a software engineer.</p>
                <p>I've been learning about and building software for over 5 years.</p>
                <p>I first started building 3D games using the Unity game engine in 2016.</p>
                <p>Today, I mostly develop web applications using technologies like <span className='d-block'>React, Node.js, Flask, PostgreSQL and MongoDB.</span></p>
                <p>I also <i>really</i> enjoy C++.</p>
                <p>As a hobby, I learn about film and filmmaking.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.experience}>
          <h2 className={`mb-5 fw-bold ${styles.sentence} text-center`}>Where I've <span className="accent">Worked.</span></h2>
          <Timeline>
            <Timeline.Left start={true} timeText="May 2024 - Present">
              <h3 className="h1 mb-4"><span>Software Engineer Intern</span> <span className='accent'>@ <a href="https://www.edwards.com/">Edwards Lifesciences</a></span></h3>
              <ul className="accentList">
                <li>Developing GUI for Critical Care Medical Technology with C#</li>
              </ul>
            </Timeline.Left>
            <Timeline.Right timeText="August 2023 - March 2024">
              <h3 className="h1 mb-4"><span>Computer Science Instructor</span> <span className='accent'>@ <a href="https://icodeschool.com/">iCode Chandler</a></span></h3>
              <ul className="accentList">
                <li>Taught children of ages 6-14 introductory robotics engineering concepts, coding fundamentals with Scratch/Vex Go, web development with HTML/CSS/JavaScript, and Data Structures & Algorithms with Python.</li>
              </ul>
            </Timeline.Right>
            <Timeline.Left end={true} timeText="May 2022 - August 2022">
              <h3 className="h1 mb-4"><span>React/TypeScript Intern</span> <span className='accent'>@ <a href="https://iqm.com/">IQM Corporation</a></span></h3>
              <ul className="accentList">
                <li>Crafted modern, performant, reliable code in TypeScript, React.js, Redux, SASS for the firm's flagship project: a suite of ad-campaign management web applications</li>
                <li>Collaborated in an agile scrum environment leveraging Git, BitBucket, Jira, and Jenkins for streamlined project management and version control</li>
                <li>Implemented critical UX features and bug fixes, resulting in significant improvements to clients' user experience</li>
                <li>Developed a complete overhaul of the main lead generation website (<a href="https://iqm.com/">iqm.com</a>) with Remix.js and Bootstrap</li>
              </ul>
            </Timeline.Left>
          </Timeline>
        </section>
        <section className={styles.education}>
          <Container fluid="sm">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={7}  className="me-0 me-md-5">
                <h2 className={styles.sentence}>I'm currently a <span className={`accent`}>graduate</span> studying <span className={`d-block mt-2 mb-2 code`}>Artificial Intelligence</span> at <span className={`fw-bold accent`}>Arizona State University</span>.</h2>
                <p className='mt-4'>Pursuing an M.S. degree.</p>
                <p>Expecting to complete May 2025.</p>
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
            <li className={`h1 ${styles.skill}`}>JavaScript <p>3 years</p></li>
            <li className={`h1 ${styles.skill}`}>Python <p>3 years</p></li>
            <li className={`h1 ${styles.skill}`}>C++ <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>Node.js <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>Express.js <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>MongoDB <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>React.js <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>TypeScript <p>1 year</p></li>
            <li className={`h1 ${styles.skill}`}>Git <p>3 years</p></li>
          </ul>
        </section>
        <section className={styles.projectsSection}>
          <h2 className={`${styles.sentence} text-center`}>Some <span className="fw-bold accent">Projects</span> I Built.</h2>
          <Projects projects={projects.slice(0, 9)} />
          <Link href="/projects">
            <a className="button mt-5">See More</a>
          </Link>
        </section>
        <section className={styles.contact}>
          <h2 className={`${styles.sentence} text-center mb-5`}>Let's <span className="fw-bold accent">Talk.</span></h2>
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
