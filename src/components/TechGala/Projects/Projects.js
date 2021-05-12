import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';

function Projects(props) {
	return (
		<div style={{ marginTop: "20px", }}>
			{ props.projects.map(project => <ProjectCard key={project.title} project={project} />) }
		</div>
	);
}

export default Projects;