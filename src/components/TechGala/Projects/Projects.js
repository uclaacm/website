import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';

function Projects(props) {
	return (
		<div className='projects-container'>
			{ props.projects.map(project => <ProjectCard key={project.title} project={project} />) }
		</div>
	);
}

export default Projects;