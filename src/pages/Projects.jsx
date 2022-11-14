import ProjectList from "./component/ProjectList.jsx";
import { projectsData } from "../data/projects.jsx";


function Projects(){
  return (  
    <>
      <div className="">
        <ProjectList projects={projectsData} />
      </div>
    </>
  )
}

export default Projects;