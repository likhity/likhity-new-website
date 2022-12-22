import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { Image, Row, Col, Container } from "react-bootstrap";

import AboutTimeline from '../components/AboutTimeline';
import NavBar from '../components/NavBar';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
            <p className={styles.nameSubtitle}>Front-End Engineer <span className="accent">+</span> UI Designer <span className="accent">+</span> Filmmaker</p>
          </div>
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
