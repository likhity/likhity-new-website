import styles from '../styles/About.module.scss';

import { HiOutlineExternalLink } from "react-icons/hi";
import Timeline from './Timeline';

export default function AboutTimeline() {
  return (
    <Timeline>
      <Timeline.Left start={true} timeText="Early 2016">
        <h3 className='h1 mb-4'>The <code>HTML</code> &amp; <code>CSS</code> Days</h3>
        <p>I first started building dumb websites with HTML and CSS when I was in <span className="fw-bold accent">9th grade</span>.</p>
      </Timeline.Left>
      <Timeline.Right timeText="Summer 2016">
        <h3 className='h1 mb-4'>The Unity &amp; <code>C#</code> Days</h3>
        <p>I got bored of building websites and switched to game development.</p>
        <p>I found the Unity Game Engine.</p>
        <p>Software engineering and problem solving was beginning to feel <span className={`fw-bold accent`}>incredibly fun</span> and something that I thought would be great to do as a career.</p>
        <p>All of the games and websites that I built during this year are unfortunately lost on an old computer.</p> 
          <p>All of the games and websites that I built during this year are unfortunately lost on an old computer.</p> 
        <p>All of the games and websites that I built during this year are unfortunately lost on an old computer.</p> 
        <p>So I <i>unfortunately</i> have no way of showcasing them.</p>
        <p>I could be making all of this up, I know. But just trust me. Ok?</p>
      </Timeline.Right>
      <Timeline.Left timeText="Fall 2019">
        <h3 className='h1 mb-4'>The <code>Processing</code> Days</h3>
        <p>I took a three year break from programming because I went through a phase of wanting to be a filmmaker.</p>
        <p>I was exposed to it again with <span className="accent"><b>Processing</b></span> in my high school engineering class.</p>
        <p>Processing was fun, but I didn't get the same spark that I initially had with HTML, CSS, and Unity.</p>
        <p>I just finished the basic assignments and submmitted satisfactory work to get my desired A grade.</p>
      </Timeline.Left>
      <Timeline.Right timeText="Fall 2019">
        <h3 className='h1 mb-4'>College Apps Season</h3>
        <p>It was time to apply for college.</p>
        <p>Chose <span className="accent">Computer Science</span> as my major because it seemed like a good choice, given my history with programming.</p>
      </Timeline.Right>
      <Timeline.Left timeText="Summer 2020">
        <h3 className='h1 mb-4'>The <code>Python</code> Days</h3>
        <p>Had a bit of a lull year, not really knowing what to do.</p>
        <p>Parents and society said that the language I should be spending my time learning is <span className={`fw-bold accent`}>Python</span>.</p>
        <p>So that's exactly what I did.</p>
        <p>It was semi-fun, but not exactly what I was expecting.</p>
        <p>I wanted there to be a lot more creativity to it, but it's more about logical thinking.</p>
        <p>This quickly got boring for me.</p>
      </Timeline.Left>
      <Timeline.Break>
        <h3 className="h1 mb-4">The problem was that I did not have any idea of what I wanted to build.</h3>
      </Timeline.Break>
      <Timeline.Right timeText="Fall 2020">
        <h3 className='h1 mb-4'>The <code>p5.js</code> Days</h3>
        <p>The first semester of my Computer Science path at ASU started, and I had to take a general engineering course.</p>
        <p>In it, we had to make a project using <span className={`accent`}>p5.js</span>.</p>
        <p>I revisited my old friends HTML and CSS. I was finally starting to feel programming was fun again.</p>
        <p>I felt I could actually be creative here.</p>
        <p><a href="https://likhity.github.io/webdev/Motor%20Skillz%20App/index.html" target="_blank">Here<HiOutlineExternalLink /></a> is the project that we built.</p>
      </Timeline.Right>
      <Timeline.Left timeText="Spring 2021">
        <h3 className='h1 mb-4'>The <code>Java</code> Days</h3>
        <p>Meh.</p>
      </Timeline.Left>
      <Timeline.Right timeText="Summer 2021">
        <h3 className={`h1 mb-4 ${styles.gold}`}><code>JavaScript</code></h3>
        <p>I still didn't have a good idea on what I should be focusing on.</p>
        <p>Then one day, I encountered <a href="https://www.youtube.com/@WebDevSimplified" target="_blank">Web Dev Simplified <HiOutlineExternalLink /></a>. And it finally clicked.</p>
        <p>I fully invested myself into the world of JavaScript, and fell in love with it.</p>
        <p>I realized what I find most joy in: building web applications with JS.</p>
      </Timeline.Right>
      <Timeline.Break>
        <h3 className="h1 mb-4">Fully learning JavaScript was a major turning point for me.</h3>
        <h3 className="h1 mb-4">I <span className="accent">finally</span> figured out exactly what I wanted to do for my career.</h3>
      </Timeline.Break>
      <Timeline.Left timeText="November 2021">
        <h3 className={`h1 mb-4 ${styles.gold}`}> <code>React</code>, <code>Node.js</code>, <code>Express</code>, <code>MongoDB</code></h3>
        <p>Learning this stack just made me feel unstoppable.</p>
        <p>Developed a number of projects. Some of which are <a href="https://github.com/likhity/the-burger-center" target="_blank">The Burger Center<HiOutlineExternalLink /></a> and 
          <a href="https://github.com/likhity/asu-course-tracker" target="_blank">ASU Course Tracker<HiOutlineExternalLink /></a>.
        </p>
      </Timeline.Left>
      <Timeline.Right timeText="2021 - 2022">
        <h3 className='h1 mb-4'>The <code>C</code> &amp; <code>C++</code> Days</h3>
        <p>I started to appreciate the logical-thinking side of programming more.</p>
        <p>Memory management is not as hard as it's hyped up to be.</p>
        <p>It's actually kinda fun.</p>
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
        <p><a href="#" target="_blank">Hire Me<HiOutlineExternalLink /></a></p>
      </Timeline.Left>
    </Timeline>
  );
}
