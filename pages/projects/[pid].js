import ProjectPage from "../../components/ProjectPage";

import projects from "../../data/projects.json";

import { useRouter } from "next/router";

export default function Index() {

  const router = useRouter();
  const { pid } = router.query;
  let project;

  if (pid) {
    const projectTitle = pid.split("-").join(" ");
    project = projects.find(proj => proj.title.toLowerCase() === projectTitle);
  }

  return (
    project && <ProjectPage project={project} />
  )
}

export async function getStaticPaths() {
  return {
    paths: projects.map(project => ({ 
      params: { 
        pid: project.title.toLowerCase().split(' ').join('-') 
      } 
    })),
    fallback: false,
  }
}

export async function getStaticProps() {
  return {
    props: { },
  }
}