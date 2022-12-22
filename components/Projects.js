import styles from "../styles/Projects.module.scss";

import { FiExternalLink, FiDownload } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";
import { useAlertsAdd } from "../contexts/AlertsContext";

import { v4 as uuid } from "uuid";
import Link from "next/link";

export default function Projects({ projects }) {

  const addAlert = useAlertsAdd();

  return (
    <ul className={styles.projects}>
      {
        projects.map(project => (
          <li key={project.link} href={project.link} className={styles.project}>
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
            <h3><a href={project.link}>{project.title}</a></h3>
            {
              project.description.split("\n").map(line => (
                <p key={uuid()} className={styles.projectDescription}>
                  {line}
                </p>
              ))
            }
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
          </li>
        ))
      }
    </ul>
  )
}
