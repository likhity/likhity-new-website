import styles from "../styles/Projects.module.scss";

import { FiExternalLink, FiDownload } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";

export default function Projects({ projects }) {
  return (
    <ul className={styles.projects}>
      {
        projects.map(project => (
          <li key={project.link} href={project.link} className={styles.project}>
            <div className={styles.icons}>
              {
                project.github && <a className={styles.icon} href={project.github} target="_blank" rel="noopener noreferrer"><VscGithubAlt /></a>
              }
              {
                project.deployment && <a className={styles.icon} href={project.deployment} target="_blank" rel="noopener noreferrer"><FiExternalLink /></a>
              }
              {
                project.download && <a className={styles.icon} href={project.download} target="_blank" rel="noopener noreferrer"><FiDownload /></a>
              }
            </div>
            <h3><a href={project.link}>{project.title}</a></h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.tags}>
              {
                project.tags.map(tag => (
                  <p className={styles.tag}>
                    {tag}
                  </p>
                ))
              }
            </div>
          </li>
        ))
      }
    </ul>
  )
}
