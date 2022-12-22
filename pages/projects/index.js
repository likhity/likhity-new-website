import Head from 'next/head'
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '../../styles/ProjectsPage.module.scss'

import Projects from '../../components/Projects';
import NavBar from "../../components/NavBar";
import Footer from '../../components/Footer';
import { MdClose } from "react-icons/md";

import projectData from "../../data/projects";
import Alerts from '../../components/Alerts';

export default function Index() {

  let projects = projectData;

  const router = useRouter();
  const { tags } = router.query;
  
  if (tags) {
    const allTags = tags.split(',');
    projects = projects.filter(project => allTags.some(tag => project.tags.includes(tag)))
  }

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hello! My name is Likhit Vyas Yarramsetti. I am currently a junior at ASU studying Computer Science and a future full-stack software engineer and filmmaker. Thank you for taking the time to check out my stuff!" />
        <title>Projects - Likhit Vyas Yarramsetti</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        </style>
      </Head>

      <main className="main">
        <section className={styles.projectsSection}>
          <NavBar />
          <h1 className={`text-center`}>All <span className="accent">Projects.</span></h1>
          {tags && 
            <div className={styles.tags}>
              Tags:
              {
                tags.split(',').map((tag => (
                  <p key={tag} className={styles.tag}>
                    {tag}
                    <Link href={`/projects?tags=${tags.split(',').filter(t => t != tag).join(',')}`}>
                      <a><MdClose /></a>
                    </Link>
                  </p>
                )))
              }
            </div>
          }
          <Projects projects={projects} />
          <Alerts />
        </section>
        <Footer />
      </main>
    </div>
  )
}