
import { GoThreeBars } from "react-icons/go";
import { VscChromeClose } from "react-icons/vsc";

import { useState } from 'react';

export default function NavBar() {

  const [toggleNav, setToggleNav] = useState(false);

  return (
    <nav className="navBar">
      <ul className={toggleNav ? "showNav" : 'hideNav'}>
        <li><a href="/about">About Me</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/resume" className="resume">Resume</a></li>
      </ul>
      <div className="navToggle" onClick={() => setToggleNav(!toggleNav)}>
        {
          toggleNav ? <VscChromeClose /> : <GoThreeBars />
        }
      </div>
    </nav>
  )
}
