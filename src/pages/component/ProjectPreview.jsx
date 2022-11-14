import hyphenateWords from "../../utilities/hyphenateWords";
import './ProjectsPreview.module.css';

const ProjectPreview = ({ project }) => {
  console.log(project.title)
  let projectUrl = ('/projects/' + hyphenateWords(project.title))
  console.log(projectUrl)
  return (
    <div className="container">
    <div className="row row-cols-3 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
            <img className="card-img-top p-2" src={project.image} alt={project.title} />
          <div className="card-body">
            <h3>{project.title}</h3>
            <p>Description: {project.description}</p>
            <a href={'/projects/' + hyphenateWords(project.title)}>
              <button className="btn btn-outline-dark mb-3"> Learn More </button>
            </a>
          </div>
        </div>
        </div>
    </div>
    </div>
  );
}

export default ProjectPreview;