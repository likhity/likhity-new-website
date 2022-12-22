
import { useState } from 'react';

import styles from "../styles/NavBar.module.scss";

export default function NavBar({ animation }) {

  return (
    <nav className={`${styles.navBar} ${animation ? styles.animation : ''}`}>
      <ul className={styles.showNav}>
        <li><a href="/about">About Me</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/resume" className={styles.resume}>Résumé</a></li>
      </ul>
    </nav>
  )
}
