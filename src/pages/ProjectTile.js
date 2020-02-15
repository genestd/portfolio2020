import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

const ProjectTile = ({ project, selected, handleClick }) => {
    const close = e => {
        e.stopPropagation()
        handleClick(null)
    }
    return project ? (
        <div className={`grid-item project${selected ? '-maximized' : ''}`} onClick={() => handleClick(project)}>
            {!selected && <div className='tags'>
                {project.tags.map(tag => <span className='tag' key={tag}>{tag}</span>)}
            
            </div>}
            { selected && <div id={project.id} className='close' onClick={close}>
                <FontAwesomeIcon className='project-icon pointer' icon={faTimesCircle} />
            </div>}
            <div className='project-title'>
                {selected ? <a className='nav-item' target='_blank' rel="noopener noreferrer" href={project.projectUrl}>Visit the project: {project.name} </a> : project.name}
            </div>
            <div className='project-subtitle'>
                {selected ? project.longDescription : project.shortDescription}
            </div>
            {selected && (
                <>
                    <div>My Role: {project.role}</div>
                    <div className='tag-container'>Technologies: {project.technologies.map(tech => <span className='tag-tech'>{tech}</span>)}</div>
                    <div>{
                        project.repositoryUrl === 'private'
                            ? <span>This project is hosted in a private repository</span>
                            : <a className='nav-item' target='_blank' rel="noopener noreferrer" href={project.repositoryUrl}>Visit the repo</a>
                        }
                    </div>
                </>
            )}
        </div>
    ) : null
}

export default ProjectTile