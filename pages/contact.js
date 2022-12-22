import React from 'react'
import Head from 'next/head'

import styles from "../styles/Contact.module.scss";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hello! My name is Likhit Vyas Yarramsetti. I am currently a junior at ASU studying Computer Science and a future full-stack software engineer and filmmaker. Thank you for taking the time to check out my stuff!" />
        <title>Contact - Likhit Vyas Yarramsetti</title>
      </Head>

      <main className="main">
        <section className={styles.contactSection}>
          <NavBar />
          <h1 className="text-center">Let's <span className="accent">Talk.</span></h1>
        </section>
        <Footer />
      </main>
    </div>
  )
}
