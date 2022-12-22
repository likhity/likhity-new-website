import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ProjectPage.module.scss'

import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FiExternalLink, FiDownload } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";
import { v4 as uuid } from 'uuid';

import { useState, useEffect } from 'react';
import AlertsProvider, { useAlertsAdd } from "../contexts/AlertsContext";
import Alerts from './Alerts';

export default function ProjectPage({ project }) {

  const addAlert = useAlertsAdd();

  const [markdown, setMarkdown] = useState("");
  const [contributors, setContributors] = useState(undefined);
  
  useEffect(() => {
    if (project.markdown) {
      fetch(project.markdown)
        .then(response => response.text())
        .then(result => {
          setMarkdown(result);
        })
    }

    if (project.contributors) {
      fetch(project.contributors)
        .then(res => res.json())
        .then(data => setContributors(data));
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Hello! My name is Likhit Vyas Yarramsetti. I am currently a junior at ASU studying Computer Science and a future full-stack software engineer and filmmaker. Thank you for taking the time to check out my stuff!" />
        <title>{`${project.title} - Likhit Vyas Yarramsetti`}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&family=Sen:wght@400;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        </style>
      </Head>

      <main className="main">
        <NavBar />
        <section className={styles.projectPage}>
          <div className={styles.heading}>
            <div className='d-flex align-items-center justify-content-between'>
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
            <div className={styles.tags}>
                {
                  project.tags.map(tag => (
                    <Link href={`/projects?tags=${encodeURIComponent(tag)}`} key={tag}>
                      <a className={styles.tag}>
                        {tag}
                      </a>
                    </Link>
                  ))
                }
            </div>
          </div>
          <div className={styles.projectDescription}>
            <div className={styles.collaborators}>
              <h3>Contributors</h3>
              {
                contributors
                ? contributors.map(contributor => (
                  <div key={contributor.node_id} className={styles.collaborator}>
                    <Image width={30} height={30} src={contributor.avatar_url} alt={`${contributor.login} GitHub avatar`} />
                    <a href={contributor.html_url}>{contributor.login}</a>
                  </div>
                ))
                : <div className={styles.collaborator}>
                    <Image width={30} height={30} src="https://avatars.githubusercontent.com/u/73198499?v=4" alt="likhity GitHub" />
                    <a href="https://github.com/likhity">likhity</a>
                  </div>
              }
            </div>
            <div className={styles.markdown}>
              {
                project.markdown ? 
                markdown
                ? <>
                    <p className={styles.readMeTitle}>README.md</p>
                    <ReactMarkdown 
                      transformImageUri={uri => 
                        uri.startsWith("http") ? uri : `${project.imageBaseUri}${uri}`
                      }
                      remarkPlugins={[remarkGfm]}>
                      {markdown}
                    </ReactMarkdown>
                  </>
                : <p className={styles.readMeTitle}>Loading README.md</p>
                : project.description.split("\n").map(line => (
                  <p key={uuid()}>{line}</p>
                  ))
                }
            </div>
          </div>
          <Alerts />
        </section>
        <Footer />
      </main>
    </div>
  )
}
