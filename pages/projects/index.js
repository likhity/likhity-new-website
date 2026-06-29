import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/ProjectsPage.module.scss'

import Projects from '../../components/Projects'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import SearchBar from '../../components/SearchBar'
import Alerts from '../../components/Alerts'

import projectData from '../../data/projects.json'

const allTags = [...new Set(projectData.flatMap(p => p.tags || []))].sort()

export default function Index() {
  const router = useRouter()
  const { q, tags } = router.query

  const activeTags = tags ? tags.split(',') : []

  let projects = projectData
  if (activeTags.length) {
    projects = projects.filter(project => activeTags.some(tag => project.tags.includes(tag)))
  }
  if (q) {
    projects = projects.filter(project =>
      project.title.toLowerCase().includes(q.toLowerCase()) ||
      project.description?.toLowerCase().includes(q.toLowerCase())
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hello! My name is Likhit Vyas. I am currently a graduate student at ASU studying AI and a future software engineer and filmmaker. Thank you for taking the time to check out my website!" />
        <title>Projects - Likhit Vyas </title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        </style>
      </Head>

      <main className="main">
        <section className={styles.projectsSection}>
          <NavBar animation={false} />
          <h1 className="text-center">All <span className="accent">Projects.</span></h1>
          <SearchBar allTags={allTags} />
          <Projects projects={projects} />
          <Alerts />
        </section>
        <Footer />
      </main>
    </div>
  )
}
