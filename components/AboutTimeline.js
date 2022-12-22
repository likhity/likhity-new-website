import Link from 'next/link';

import styles from '../styles/About.module.scss';

import { HiOutlineExternalLink } from "react-icons/hi";
import Timeline from './Timeline';

export default function AboutTimeline() {
  return (
    <Timeline>
      <Timeline.Left start={true} timeText="Early 2016">
        <h3 className='h1 mb-4'><span className='code'>HTML</span> &amp; <span className="code">CSS</span></h3>
        <p>I first started building small websites with HTML and CSS when I was in <span className="fw-bold accent">9th grade</span>.</p>
      </Timeline.Left>
      <Timeline.Right timeText="Summer 2016">
        <h3 className='h1 mb-4'>Unity &amp; <span className="code">C#</span></h3>
        <p>I got bored of building websites and switched to game development.</p>
        <p>I found the Unity Game Engine, and tried to make some games that would sell on Steam.</p>
        <p>Those games never sold Steam. (Because I never finished them.)</p>
        <p>Software engineering and problem solving was beginning to feel <span className={`fw-bold accent`}>incredibly fun</span> and something that I thought would be great to do as a career.</p>
      </Timeline.Right>
      <Timeline.Left timeText="Fall 2019">
        <h3 className='h1 mb-4'><span className="code">Processing</span></h3>
        <p>I had a three year break from programming because I went through a phase of wanting to be a filmmaker.</p>
        <p>I was exposed to it again with <a href='https://processing.org/' target="_blank" rel="noopener noreferrer" className="accent">Processing</a> in my high school engineering class.</p>
        <p>It was fun, but I didn't get the same spark that I initially had with HTML, CSS, and Unity.</p>
        <p>Just submitted basic work for those assignments to get my desired grade.</p>
      </Timeline.Left>
      <Timeline.Right timeText="Fall 2019">
        <h3 className='h1 mb-4'>College Apps Season</h3>
        <p>It was time to apply for college.</p>
        <p><span className="accent">Computer Science</span> seemed like a good choice as my major, given my history with programming.</p>
        <p>So I went ahead and applied to Arizona State University and got in.</p>
      </Timeline.Right>
      <Timeline.Left timeText="Summer 2020">
        <h3 className='h1 mb-4'><span className="code">Python</span></h3>
        <p>Parents and society said that the language I should be spending my time learning is <span className={`fw-bold accent`}>Python</span>.</p>
        <p>So that's exactly what I did.</p>
        <p>Although it's extremely easy to learn, it quickly got boring for me.</p>
        <p>I did not really have an idea of exactly how I could apply this skill to do something useful.</p>
        <p>I was just learning a language for the sake of learning a language.</p>
      </Timeline.Left>
      <Timeline.Break>
        <p className="h1 mb-4">I knew I wanted to build cool things, but I couldn't figure out exactly how to go about doing that.</p>
      </Timeline.Break>
      <Timeline.Right timeText="Fall 2020">
        <h3 className='h1 mb-4'><span className="code">p5.js</span></h3>
        <p>Had a bit of a lull year, not really knowing what to do.</p>
        <p>The first semester of my Computer Science path at ASU started, and I had to take a general engineering course.</p>
        <p>In it, we had to make a project using <span className={`accent`}>p5.js</span> (which is basically a JS library that does everything Processing can).</p>
        <p>I revisited my old friends HTML and CSS. I felt like programming was fun again.</p>
        <p>I felt I could actually be creative here.</p>
        <p>I also finally got around to learning JavaScript, but I just learned the bare minimum to complete this project.</p>
        <p><a href="/projects/motor-skillz" target="_blank" rel="noopener noreferrer">This<HiOutlineExternalLink /></a> is the project that I built in the class.</p>
      </Timeline.Right>
      <Timeline.Left timeText="Spring 2021">
        <h3 className='h1 mb-4'>Learning <span className="code">Java</span></h3>
        <p>Java is a very verbose language that can be fun sometimes but annoying most of the time.</p>
        <p>Installation and setup is annoying as hell, typing out <code>public static void main(String[] args)</code> is annoying as hell, and trying to do anything substantial and useful is annoying as hell.</p>
        <p>However, I give credit to this language for teaching me a lot of concepts in object-oriented programming, CS, and software development.</p>
      </Timeline.Left>
      <Timeline.Right timeText="Summer 2021">
        <h3 className={`h1 mb-4 ${styles.gold}`}><span className="code">JavaScript</span></h3>
        <p>I still didn't have a good idea on what I should be focusing on.</p>
        <p>I knew I wanted to build cool things, but I couldn't figure out exactly how to go about doing that.</p>
        <p>Then one day, I encountered this YouTube channel <a href="https://www.youtube.com/@WebDevSimplified" target="_blank" rel="noopener noreferrer">Web Dev Simplified <HiOutlineExternalLink /></a>, and it finally clicked.</p>
        <p>I realized what I find most joy in: building web applications with JS.</p>
        <p>I fully invested myself into the world of JavaScript, and fell in love with it.</p>
      </Timeline.Right>
      <Timeline.Break>
        <p className="h1 mb-4">Fully learning JavaScript was a major turning point for me.</p>
        <p className="h1 mb-4">I <span className="accent">finally</span> figured out exactly what I wanted to do for my career.</p>
      </Timeline.Break>
      <Timeline.Left timeText="November 2021">
        <h3 className={`h1 mb-4 ${styles.gold}`}> <span className="code">React</span>, <span className="code">Node.js</span>, <span className="code">Express</span>, <span className="code">MongoDB</span></h3>
        <p>Learning this stack just made me feel unstoppable.</p>
        <p>Developed a number of projects. Some of which are <a href="/projects/the-burger-center" target="_blank" rel="noopener noreferrer">The Burger Center<HiOutlineExternalLink /></a> and 
          <a href="/projects/asu-course-tracker" target="_blank" rel="noopener noreferrer">ASU Course Tracker<HiOutlineExternalLink /></a>.
        </p>
      </Timeline.Left>
      <Timeline.Right timeText="2021 - 2022">
        <h3 className='h1 mb-4'>Learning <span className="code">C</span> &amp; <span className="code">C++</span></h3>
        <p>Up till now, I've been thinking of programming as a mostly creative exercise, something that you do to build cool things.</p>
        <p>Now, I realized it's more about logic and getting a computer to perform a task in the most optimal way.</p>
        <p>C & C++ forced me to think about what's actually going on inside the actual computer, with the CPU and the memory.</p>
        <p>Although trying to build anything useful with these languages is a pain, it taught me a lot about Computer Science.</p>
        <p><a href="/projects?tags=C%2b%2b" target="_blank" rel="noopener noreferrer">These<HiOutlineExternalLink /></a> are some projects that I built.</p>
      </Timeline.Right>
      <Timeline.Left timeText="Spring 2022">
        <h3 className='h1 mb-4'>Data Structures & Algorithms</h3>
        <p>This course at ASU really changed my view of my major.</p>
        <p>I finally developed a liking of <span className="accent">Computer Science</span> rather than just programming.</p>
        <p>The design and analysis of algorithms is a very intellectually stimulating activity and surprisingly fun.</p>
      </Timeline.Left>
      <Timeline.Right timeText="Summer 2022">
      <h3 className='h1 mb-4'>React/TypeScript Intern @ IQM Corporation</h3>
      <p>Landed my first internship.</p>
      <p>I learned a lot here. I honed my React skills and learned TypeScript.</p>
      <p>Learned how to effectively work with a team using Git, BitBucket, & JIRA.</p>
      <p>Developed a couple of new features for their apps.</p>
      <p>Lots and lots of bug fixes.</p>
      </Timeline.Right>
      <Timeline.Left timeText="Present" end={true}>
        <h3 className='h1 mb-4'>Continuing My Education, Looking For Opportunities.</h3>
        <p>Currently in my third year at ASU.</p>
        <p>Just finished introductory courses on AI and Theoretical CS.</p>
        <p>Searching for internships.</p>
        <p>
          <Link href="/contact">
            <a>Get In Touch<HiOutlineExternalLink /></a>
          </Link>
        </p>
      </Timeline.Left>
    </Timeline>
  );
}
