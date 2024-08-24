import Head from 'next/head'
import styles from '../styles/404.module.scss'

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hello! My name is Likhit Vyas. I am currently a graduate student at ASU studying AI and a future software engineer and filmmaker. Thank you for taking the time to check out my website!" />
        <title>404 Not Found - Likhit Vyas </title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        </style>
      </Head>

      <main className="main">
        <NavBar />
        <section className={styles.error404}>
          <div>
            <h1>Error <span className="accent">404.</span></h1>
            <p>That page doesn't exist.</p>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}