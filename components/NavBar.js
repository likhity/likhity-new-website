
import Link from "next/link";
import styles from "../styles/NavBar.module.scss";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { useState } from "react";

export default function NavBar({ delayedAnimation }) {

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className={`${styles.navBar} ${delayedAnimation ? styles.delayedAnimation : styles.animation}`}>
      <Link href="/">
        <a className={styles.homeLink}>L<span className={`accent fw-bold`}>V</span> <span className={styles.yLetter}>Y</span> </a>
      </Link>
      <ul className={styles.showNav}>
        <li>
          <Link href="/journey">
            <a>Journey</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <a href="https://likhity.github.io/webdev/Likhit_Vyas_Yarramsetti_Resume_2022.pdf" className={styles.resume}>Résumé</a>
        </li>
      </ul>
      <button onClick={() => setShowMobileNav(prev => !prev)} className={styles.mobileNavButton}>
        {showMobileNav ? <MdClose /> : <GiHamburgerMenu />}
      </button>
      <div className={`${styles.mobileNav} ${showMobileNav ? styles.showMobileNav : styles.hideMobileNav}`}>
        <ul>
          <li>
            <Link href="/journey">
              <a>Journey</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <a href="https://likhity.github.io/webdev/Likhit_Vyas_Yarramsetti_Resume_2022.pdf" className={styles.resume}>Résumé</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
