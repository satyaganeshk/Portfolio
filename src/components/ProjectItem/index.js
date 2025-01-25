import './index.css'

const ProjectItem = ({projectDetails}) => {
  const {projectId, imageURL, description, title, url} = projectDetails
  return (
    <li className="project-item-container">
      <img
        className="project-item-image"
        src={imageURL}
        alt={`Project item ${projectId}`}
      />
      <div className="project-item-details-container">
        <h1 className="project-item-title">{title}</h1>
        <p className="project-item-description">{description}</p>
      </div>
      <div className="text-center mb-3">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-primary">
            Visit Here
          </button>
        </a>
      </div>
    </li>
  )
}
export default ProjectItem
