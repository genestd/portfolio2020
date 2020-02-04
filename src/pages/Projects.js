import React, { useState } from 'react'
import ProjectTile from './ProjectTile'
import './projects.scss'
import projects from './projectdata.json'

export default () => {
    const [selectedProject, selectProject] = useState(null)
    return (
        <>
            <div className="grid">
                {
                    projects.map(project => <ProjectTile
                        key={project.id}
                        project={project}
                        handleClick={selectProject}
                        selected={false}
                    />)
                }
            </div>
            <div className={`project-${selectedProject===null ? 'hidden' : 'selected'}`}>
                <ProjectTile
                    handleClick={selectProject}
                    project={selectedProject}
                    selected
                />
            </div>
        </>
    )
}