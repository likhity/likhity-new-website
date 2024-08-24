import Head from 'next/head'
import styles from '../styles/About.module.scss'

import AboutTimeline from '../components/AboutTimeline';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

export default function Journey() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hello! My name is Likhit Vyas. I am currently a graduate student at ASU studying AI and a future software engineer and filmmaker. Thank you for taking the time to check out my website!" />
        <title>My Journey - Likhit Vyas </title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        </style>
      </Head>

      <main className="main">
        <section className={styles.timelineSection}>
          <NavBar />
          <h2 className={`h1 text-center mb-5 ${styles.timelineTitle}`}>I've been learning about and building applications for <span className="accent">over 5 years</span>.</h2>
          <AboutTimeline />
        </section>
        <Footer />
      </main>
    </div>
  )
}
