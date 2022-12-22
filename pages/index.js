import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { Image, Row, Col, Container } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";

import NavBar from '../components/NavBar';
import Timeline from '../components/Timeline';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hello! My name is Likhit Vyas Yarramsetti. I am currently a junior at ASU studying Computer Science and a future full-stack software engineer and filmmaker. Thank you for taking the time to check out my stuff!" />
        <title>Likhit Vyas Yarramsetti</title>
      </Head>

      <main className="main">
        <NavBar />
        <section className={styles.header}>
          <div className={styles.title}>
            <p className={styles.typing}>Hello, my name is</p>
            <h1 className={styles.nameTitle}><span className="accent">Likhit Vyas</span> Yarramsetti</h1>
            <p className={styles.nameSubtitle}>Front-End Engineer <span className="accent">+</span> UI Designer</p>
          </div>
        </section>
        <section className={styles.experience}>
          <h2 className={`mb-5 ${styles.sentence}`}><span className="fw-bold">Where I've Worked</span><span className="accent">.</span></h2>
          <Timeline>
            <Timeline.Left start={true} timeText="May 2022 - August 2022">
              <h3 className="h1 mb-4">React/TypeScript Intern <span className="accent">@ IQM Corporation</span></h3>
              <ul className="accentList">
                <li>Wrote modern, performant code for the all of the company's main projects.</li>
                <li>Honed my skills in React, Redux, TypeScript, Sass. Learned Jenkins.</li>
                <li>Learned how to effectively work in an agile team using Git, JIRA, BitBucket, & Confluence.</li>
                <li>Developed a bunch of new features and performed numerous bug fixes that improved clients' user experience.</li>
                <li>Worked on a complete overhaul of the main website, which allowed the company to generate more clients.</li>
              </ul>
            </Timeline.Left>
            <Timeline.Right end={true} timeText="Present">
              <h3 className="h1">Looking for internship opportunities.</h3>
              <p><a href="/contact" target="_blank">Hire Me<HiOutlineExternalLink /></a></p>
            </Timeline.Right>
          </Timeline>
        </section>
        <section className={styles.skillsSection}>
          <h2 className={styles.sentence}>Yeah, I got <span className="fw-bold accent">Skills.</span></h2>
          <ul className={styles.skills}>
            <li className={`h1 ${styles.skill}`}>
              JavaScript
              <p>2 years</p>
            </li>
            <li className={`h1 ${styles.skill}`}>
              HTML
              <p>3 years</p>
            </li>
            <li className={`h1 ${styles.skill}`}>
              CSS
              <p>3 years</p>
            </li>
            <li className={`h1 ${styles.skill}`}>React <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>Node.js <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>Express <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>MongoDB <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>Git <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>TypeScript <p>6 months</p></li>
          </ul>
        </section>
        <section className={styles.education}>
          <Container fluid="sm">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={7}  className="me-0 me-md-5">
                <h2 className={styles.sentence}>I'm currently a <span className={`accent`}>junior</span> studying <span className={`d-block mt-2 mb-2 ${styles.code}`}>Computer Science, B.S.</span> at <span className={`fw-bold ${styles.asu}`}>Arizona State University</span> expecting to graduate on <span className={`d-inline-block mt-2 accent`}>May 2024</span>.</h2>
                <p className="fw-bold mt-5">Relevant Course Work</p>
                <ul>
                  <li>Data Structures &amp; Algorithms</li>
                  <li>Theoretical Computer Science</li>
                  <li>Linear Algebra</li>
                  <li>Probability &amp; Statistics</li>
                </ul>
                <p className="fw-bold">Current GPA: <span className={`accent`}>3.85</span></p>
              </Col>
              <Col>
                <Image src="/asu.jpg" width={500} className="img-fluid"></Image>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          Copyright &copy; {new Date().getFullYear()} Likhit Vyas Yarramsetti
        </p>
      </footer>
    </div>
  )
}
