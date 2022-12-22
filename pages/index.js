import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { Image, Row, Col, Container } from "react-bootstrap";
import { GoThreeBars } from "react-icons/go";
import { VscChromeClose } from "react-icons/vsc";

import { useState } from 'react';

export default function Home() {

  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Hello! My name is Likhit Vyas Yarramsetti. I am currently a junior at ASU studying Computer Science and a future full-stack software engineer and filmmaker. Thank you for taking the time to check out my stuff!" />
        <title>Likhit Vyas Yarramsetti</title>
      </Head>

      <main className={styles.main}>
        <nav className={styles.navBar}>
          <ul className={toggleNav ? styles.showNav : ''}>
            <li><a href="">Home</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Resume</a></li>
            <li><a href="">Contact Me</a></li>
          </ul>
          <div className={styles.navToggle} onClick={() => setToggleNav(!toggleNav)}>
            {
              toggleNav ? <VscChromeClose /> : <GoThreeBars />
            }
          </div>
        </nav>
        <section className={styles.header}>
          <div className={styles.title}>
            <p className={styles.typing}>Hello, my name is</p>
            <h1 className={styles.nameTitle}><span className={styles.accent}>Likhit Vyas</span> Yarramsetti</h1>
            <p className={styles.nameSubtitle}>Front-End Engineer <span className={styles.accent}>+</span> UI Designer <span className={styles.accent}>+</span> Filmmaker</p>
          </div>
        </section>
        <section className={styles.timelineSection}>
            <h2 className={`h1 text-center mb-5 ${styles.timelineTitle}`}>I've been learning about and building applications for <span className={styles.accent}>over 5 years</span>.</h2>
            <div className={styles.timeline}>
              <div className={`${styles.timelineElement} ${styles.left}`}>
                <div className={`${styles.timelineElementItems}`}>
                  <h3 className='h1 mb-4'>The Early Days</h3>
                  <p>I first started building projects with HTML and CSS around <strong className={`${styles.accent}`}>9th grade</strong>.</p>
                  <p>I grew a real appreciation for these fundamental web technologies because of how powerful they are.</p>
                  <p>I was so inspired to build and create many small little web applications.</p>
                  <div className={styles.mask}></div>
                </div>
                <div className={`${styles.timelineElementYear}`}>
                  <p className={`mb-0`}>Early 2016</p>
                </div>
              </div>
              <div className={`${styles.timelineElement} ${styles.right}`}>
                <div className={`${styles.timelineElementYear}`}>
                  <p className={`mb-0`}>Summer 2016</p>
                </div>
                <div className={`${styles.timelineElementItems}`}>
                  <h3 className='h1 mb-4'>The Unity Days</h3>
                  <p>For a while I got bored of building websites and switched to game development.</p>
                  <p>I found the Unity Game Engine.</p>
                  <p>Software engineering and problem solving was beginning to feel <span className={`fw-bold ${styles.accent}`}>incredibly fun</span> and something that I thought would be great as a career.</p>
                  <p>All of the games and websites that I built during this year are unfortunately lost on an old computer.</p> 
                  <p>So I <i>unfortunately</i> have no way of showcasing them.</p>
                  <p>I could be making all of this up, I know. But just trust me. Ok?</p>
                </div>
              </div>
            </div>
        </section>
        <section className={styles.education}>
          <Container fluid="sm">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={7}  className="me-0 me-md-5">
                <h2 className={styles.sentence}>I'm currently a <span className={`${styles.accent}`}>junior</span> studying <span className={`d-block mt-2 mb-2 ${styles.code}`}>Computer Science, B.S.</span> at <span className={`fw-bold ${styles.asu}`}>Arizona State University</span> expecting to graduate on <span className={`d-inline-block mt-2 ${styles.accent}`}>May 2024</span>.</h2>
                <p className="fw-bold mt-5">Relevant Course Work</p>
                <ul>
                  <li>Data Structures &amp; Algorithms</li>
                  <li>Discrete Math</li>
                  <li>Linear Algebra</li>
                  <li>Probability &amp; Statistics</li>
                </ul>
                <p className="fw-bold">Current GPA: <span className={`${styles.accent}`}>3.85</span></p>
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
