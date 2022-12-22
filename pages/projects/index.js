import Head from 'next/head'
import styles from '../../styles/ProjectsPage.module.scss'

import Projects from '../../components/Projects';
import NavBar from "../../components/NavBar";
import Footer from '../../components/Footer';

import projectData from "../../data/projects";
import Alerts from '../../components/Alerts';
import AlertsProvider from '../../contexts/AlertsContext';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hello! My name is Likhit Vyas Yarramsetti. I am currently a junior at ASU studying Computer Science and a future full-stack software engineer and filmmaker. Thank you for taking the time to check out my stuff!" />
        <title>Projects - Likhit Vyas Yarramsetti</title>
      </Head>

      <main className="main">
        <section className={styles.projectsSection}>
          <NavBar />
          <h1 className={`text-center`}>All <span className="accent">Projects.</span></h1>
          <AlertsProvider>
            <Projects projects={projectData} />
            <Alerts />
          </AlertsProvider>
        </section>
        <Footer />
      </main>
    </div>
  )
}
