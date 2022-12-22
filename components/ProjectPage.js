import Head from 'next/head'
import styles from '../styles/ProjectPage.module.scss'

import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FiExternalLink, FiDownload } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";

import { useState, useEffect } from 'react';

export default function ProjectPage({ project }) {

  const [markdown, setMarkdown] = useState("");
  
  useEffect(() => {
    if (project.markdown) {
      fetch(project.markdown)
        .then(response => response.text())
        .then(result => {
          setMarkdown(result);
        })
    }
  }, [markdown, project.markdown]);

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hello! My name is Likhit Vyas Yarramsetti. I am currently a junior at ASU studying Computer Science and a future full-stack software engineer and filmmaker. Thank you for taking the time to check out my stuff!" />
        <title>{`${project.title} - Likhit Vyas Yarramsetti`}</title>
      </Head>

      <main className="main">
        <NavBar />
        <section className={styles.projectPage}>
          <div className={styles.heading}>
            <div className={styles.title}>
              <p>Project</p>
              <h1>{project.title}</h1>
            </div>
            <div className={styles.icons}>
            {
                project.github ?
                project.github === "ask me" ?
                <a className={styles.icon} onClick={() => { 
                  addAlert("I cannot make this repo public. If you want to view it, contact me and I can send you a private link.");
                }}><VscGithubAlt /></a>
                : <a className={styles.icon} href={project.github} target="_blank" rel="noopener noreferrer"><VscGithubAlt /></a>
                : <></>
              }
              {
                project.deployment && <a className={styles.icon} href={project.deployment} target="_blank" rel="noopener noreferrer"><FiExternalLink /></a>
              }
              {
                project.download && <a className={styles.icon} href={project.download} target="_blank" rel="noopener noreferrer"><FiDownload /></a>
              }
            </div>
          </div>
          <div className={styles.projectDescription}>
            <div className={styles.collaborators}>
              <h3>Contributors</h3>
              {
                project.collaborated 
                ? <></>
                : <div className={styles.collaborator}>
                    <img src="https://avatars.githubusercontent.com/u/73198499?v=4" alt="likhity GitHub" />
                    <p><a href="https://github.com/likhity">likhity</a></p>
                  </div>
              }
            </div>
            <div className={styles.markdown}>
              {
                markdown
                ? <>
                    <p className={styles.readMeTitle}>README.md</p>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {markdown}
                    </ReactMarkdown>
                  </>
                : project.description.split("\n").map(line => (
                  <p>{line}</p>
                ))
              }
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}
