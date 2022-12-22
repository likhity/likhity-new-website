import React from 'react'

import Head from 'next/head'
import styles from '../styles/About.module.scss'

import AboutTimeline from '../components/AboutTimeline';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hello! My name is Likhit Vyas Yarramsetti. I am currently a junior at ASU studying Computer Science and a future full-stack software engineer and filmmaker. Thank you for taking the time to check out my stuff!" />
        <title>About Me - Likhit Vyas Yarramsetti</title>
      </Head>

      <main className="main">
        <section className={styles.timelineSection}>
          <h2 className={`h1 text-center mb-5 ${styles.timelineTitle}`}>I've been learning about and building applications for <span className="accent">over 5 years</span>.</h2>
          <AboutTimeline />
        </section>
      </main>
    </div>
  )
}
