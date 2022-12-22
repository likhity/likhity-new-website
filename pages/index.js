import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { Image, Row, Col, Container } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiExternalLink, FiDownload } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";

import NavBar from '../components/NavBar';
import Timeline from '../components/Timeline';

const projects = [
  {
    title: "ASU Course Tracker",
    description: "A way for students to track the number of seats available for a course. A notification is sent to the user whenever the number of seats changes.",
    github: "https://github.com/likhity/asu-course-tracker",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "/projects/asu-course-tracker",
  },
  {
    title: "Pizza Shop",
    description: "A pizza ordering system built for a fake pizza restaurant named \"SunDevil Pizza\".",
    github: "https://github.com/likhity/pizza-shop",
    deployment: "https://pizza-shop-team19.herokuapp.com/",
    tags: ["Node.js", "Express", "MongoDB", "CSS", "Jest", "Cypress"],
    link: "/projects/pizza-shop",
  },
  {
    title: "The Burger Center",
    description: "A landing page for a fake restaurant named \"The Burger Center\". Just wanted to practice my CSS and React skills.",
    github: "https://github.com/likhity/the-burger-center",
    deployment: "https://likhity.github.io/webdev/the-burger-center",
    tags: ["React", "CSS"],
    link: "/projects/the-burger-center",
  },
  {
    title: "Postman Clone",
    description: "A very simple clone of postman that uses Axios to make requests.",
    github: "https://github.com/likhity/postman-clone",
    deployment: "https://likhity.github.io/webdev/postman-clone/index.html",
    tags: ["CSS", "Vanilla JS", "Axios", "Parcel"],
    link: "/projects/postman-clone",
  },
  {
    title: "Twitch Chat Analyzer",
    description: "Chrome extension that analyzes a twitch stream and reports a percentage positivity of the chat.",
    github: "https://github.com/likhity/twitch-stream-chat-analyzer",
    tags: ["Python", "Socket.io", "Flask", "NLTK", "Numpy"],
    link: "/projects/twitch-stream-chat-analyzer",
  },
  {
    title: "Old Personal Website",
    description: "The old version personal of my personal website. Hideous, I know.",
    github: "https://github.com/likhity/likhity.github.io",
    deployment: "https://likhity.github.io/webdev/",
    tags: ["HTML", "CSS", "JS"],
    link: "/projects/old-personal-website",
  },
  {
    title: "Shoot 'Em Up",
    description: "Basic FPS game built with Unity. I initially planned on fully fleshing this game out and releasing on Steam, but I later became more interested in web dev.",
    download: "https://likhity.github.io/webdev/Infiltrate.zip",
    tags: ["Unity", "C#"],
    link: "/projects/shoot-em-up",
  },
  {
    title: "Motor Skillz",
    description: "A simple game for toddlers.",
    github: "https://github.com/likhity/likhity.github.io/tree/master/webdev/Motor%20Skillz%20App",
    deployment: "https://likhity.github.io/webdev/Motor%20Skillz%20App/index.html",
    tags: ["HTML", "CSS", "JS", "C#"],
    link: "/projects/shoot-em-up",
  },
]

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
        <NavBar animation={true} />
        <section className={styles.header}>
          <div className={styles.title}>
            <p className={styles.typing}>Hello, my name is</p>
            <h1 className={styles.nameTitle}><span className="accent">Likhit Vyas</span> Yarramsetti</h1>
            <p className={styles.nameSubtitle}>Software Engineer <span className="accent">+</span> Filmmaker</p>
          </div>
        </section>
        <section className={styles.experience}>
          <h2 className={`mb-5 fw-bold ${styles.sentence}`}>Where I've <span className="accent">Worked.</span></h2>
          <Timeline>
            <Timeline.Left start={true} timeText="May 2022 - August 2022">
              <h3 className="h1 mb-4">React/TypeScript Intern <span className='accent'>@ <a href="https://iqm.com/">IQM Corporation</a></span></h3>
              <ul className="accentList">
                <li>Wrote modern, performant code for the all of the company's main projects.</li>
                <li>Worked with technologies like TypeScript, React, Sass, and Jenkins.</li>
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
              HTML/CSS
              <p>3 years</p>
            </li>
            <li className={`h1 ${styles.skill}`}>
              JS
              <p>2.5-3 years</p>
            </li>
            <li className={`h1 ${styles.skill}`}>React <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>Node.js <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>Express <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>MongoDB <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>Git <p>2 years</p></li>
            <li className={`h1 ${styles.skill}`}>
              Sass
              <p>1.5 years</p>
            </li>
            <li className={`h1 ${styles.skill}`}>TypeScript <p>6 months</p></li>
          </ul>
        </section>
        <section className={styles.projectsSection}>
          <h2 className={styles.sentence}>Some <span className="fw-bold accent">Projects</span> I've Built.</h2>
          <ul className={styles.projects}>
            {
              projects.map(project => (
                <li key={project.link} href={project.link} className={styles.project}>
                  <div className={styles.icons}>
                    {
                      project.github && <a className={styles.icon} href={project.github} target="_blank" rel="noopener noreferrer"><VscGithubAlt /></a>
                    }
                    {
                      project.deployment && <a className={styles.icon} href={project.deployment} target="_blank" rel="noopener noreferrer"><FiExternalLink /></a>
                    }
                    {
                      project.download && <a className={styles.icon} href={project.download} target="_blank" rel="noopener noreferrer"><FiDownload /></a>
                    }
                  </div>
                  <h3><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.tags}>
                    {
                      project.tags.map(tag => (
                        <p className={styles.tag}>
                          {tag}
                        </p>
                      ))
                    }
                  </div>
                </li>
              ))
            }
          </ul>
          <a className={styles.seeMoreButton} href="/projects">See More</a>
        </section>
        <section className={styles.education}>
          <Container fluid="sm">
            <Row className="align-items-center">
              <Col xs={12} sm={12} md={7}  className="me-0 me-md-5">
                <h2 className={styles.sentence}>I'm currently a <span className={`accent`}>junior</span> studying <span className={`d-block mt-2 mb-2 code`}>Computer Science, B.S.</span> @ <span className={`fw-bold accent`}>Arizona State University</span> expecting to graduate on <span className={`d-inline-block mt-2 accent`}>May 2024</span>.</h2>
                <h4 className="fw-bold mt-5 mb-3">Relevant Course Work</h4>
                <ul>
                  <li>Data Structures &amp; Algorithms</li>
                  <li>Theoretical Computer Science</li>
                  <li>Linear Algebra</li>
                  <li>Probability &amp; Statistics</li>
                </ul>
                <h4 className="fw-bold">Current GPA: <span className={`accent`}>3.85</span></h4>
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
