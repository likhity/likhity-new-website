
import Link from "next/link";
import styles from "../styles/NavBar.module.scss";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { FiGithub, FiTwitter } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

import { useState } from "react";

export default function NavBar({ delayedAnimation }) {

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className={`${styles.navBar} ${delayedAnimation ? styles.delayedAnimation : styles.animation}`}>
      <Link href="/">
        <a className={styles.homeLink}>vyas<span className="accent">.</span></a>
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
          <Link href="/resume.pdf">
            <a className={styles.resume}>Résumé</a>
          </Link>
        </li>
      </ul>
      <button onClick={() => setShowMobileNav(prev => !prev)} className={styles.mobileNavButton}>
        {showMobileNav ? <MdClose /> : <GiHamburgerMenu />}
      </button>
      <div className={`${styles.mobileNav} ${showMobileNav ? styles.showMobileNav : styles.hideMobileNav}`}>
        <ul className={styles.navLinks}>
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
        <ul className={styles.socialLinks}>
          <li><a href="https://github.com/likhity"><FiGithub /> GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/likhit-vyas/"> <BsLinkedin /> LinkedIn</a></li>
          <li><a href="https://www.instagram.com/ylikhit/"> <AiOutlineInstagram /> Instagram</a></li>
          <li><a href="https://twitter.com/YLikhit"> <FiTwitter /> Twitter</a></li>
        </ul>
      </div>
    </nav>
  )
}
