import React from 'react'

const ProjectTile = ({ project, selected, handleClick }) => {
    const close = e => {
        e.stopPropagation()
        handleClick(null)
    }
    return project ? (
        <div className={`grid-item project${selected ? '-maximized' : ''}`} onClick={() => handleClick(project)}>
            <div className='tags'>
                {project.tags.map(tag => <span className='tag' key={tag}>{tag}</span>)}
            </div>
            { selected && <div id={project.id} className='close' onClick={close}>
                X
            </div>}
            <div className='project-title'>
                {project.name}
            </div>
            <div className='project-subtitle'>
                {project.shortDescription}
            </div>
        </div>
    ) : null
}

export default ProjectTile