import React from 'react'
import Head from 'next/head'

import styles from "../styles/Contact.module.scss";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

import { FiMail } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hello! My name is Likhit Vyas Yarramsetti. I am currently a junior at ASU studying Computer Science and a future full-stack software engineer and filmmaker. Thank you for taking the time to check out my stuff!" />
        <title>Contact - Likhit Vyas Yarramsetti</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        </style>
      </Head>

      <main className="main">
        <section className={styles.contact}>
          <NavBar />
          <h1 className="text-center">Let's <span className="accent">Talk.</span></h1>
          <div className={styles.formSection}>
            <div className={styles.text}>
              <p>You can use the form or send an email to <a href="mailto:y.vyas.likhit@gmail.com">y.vyas.likhit@gmail.com</a>.</p>
              <p>Both will work.</p>
              <p>I'll get back to you as soon as I can.</p>
            </div>
            <form className={styles.form} action="https://formsubmit.co/d069f9b37767623e25063b9e10c29f64" method='POST'>
              <input type="text" name="name" id="name" placeholder='Name' required/>
              <input type="email" name="email" id="email" placeholder='Email' required/>
              <textarea type="text" name="message" id="message" placeholder='Message' required/>
              <button type="submit" className='button'>Submit</button>
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}
