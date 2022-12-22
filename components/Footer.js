import Link from "next/link";
import styles from "../styles/Footer.module.scss";

import { Container, Row, Col } from "react-bootstrap";

import { FiGithub, FiTwitter, FiDownload, FiMail } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiReact, SiNextdotjs } from "react-icons/si";
import { DiSass } from "react-icons/di";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container fluid="sm">
        <Row>
          <Col>
            <h3 className="mb-4">Socials</h3>
            <ul className={styles.socialLinks}>
              <li><a href="https://github.com/likhity"><FiGithub /> GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/likhit-vyas/"> <BsLinkedin /> LinkedIn</a></li>
              <li><a href="https://www.instagram.com/ylikhit/"> <AiOutlineInstagram /> Instagram</a></li>
              <li><a href="https://twitter.com/YLikhit"> <FiTwitter /> Twitter</a></li>
            </ul>
          </Col>
          <Col>
            <h3 className="mb-4">Links</h3>
            <ul className={styles.links}>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/journey">
                  <a>Journey</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <a 
                  href="https://likhity.github.io/webdev/Likhit_Vyas_Yarramsetti_Resume_2022.pdf" 
                  className={styles.resume}>
                  <FiDownload />Résumé
                </a>
              </li>
            </ul>
            <a href="mailto:y.vyas.likhit@gmail.com" className="fs-5"> <FiMail /> y.vyas.likhit@gmail.com</a>
        </Col>
        </Row>
        <div className={`mt-5 ${styles.built}`}>
          <p>Built by hand using</p>
          <div className="d-flex">
            <a href="https://reactjs.org/"><SiReact /></a>
            <a href="https://nextjs.org/"><SiNextdotjs /></a>
            <a href="https://sass-lang.com/"><DiSass /></a>
          </div>
        </div>
        <p className={styles.copyrightText}>
          &copy; {new Date().getFullYear()} Likhit Vyas Yarramsetti
        </p>
      </Container>
    </footer>
  )
}
