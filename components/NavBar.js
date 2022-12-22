
import styles from "../styles/NavBar.module.scss";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { useState } from "react";

export default function NavBar({ delayedAnimation }) {

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className={`${styles.navBar} ${delayedAnimation ? styles.delayedAnimation : styles.animation}`}>
      <ul className={styles.showNav}>
        <li><a href="/journey">Journey</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/resume" className={styles.resume}>Résumé</a></li>
      </ul>
      <button onClick={() => setShowMobileNav(prev => !prev)} className={styles.mobileNavButton}>
        {showMobileNav ? <MdClose /> : <GiHamburgerMenu />}
      </button>
      <div className={`${styles.mobileNav} ${showMobileNav ? styles.showMobileNav : styles.hideMobileNav}`}>
        <ul>
          <li><a href="/journey">Journey</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/resume" className={styles.resume}>Résumé</a></li>
        </ul>
      </div>
    </nav>
  )
}
