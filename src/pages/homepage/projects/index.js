import HomepageTitle from "../../../components/homepage-titles";
import ProjectData from "../../../data/projects"
import { ProjectsContainer, ProjectsGrid } from "./style";
import ProjectBox from "../../../components/project-box";

function Projects() {
    return (
        <ProjectsContainer>
            <HomepageTitle title='Project' />
            {<ProjectsGrid>
                {ProjectData.map((project, index) => (
                    <ProjectBox
                        project={project}
                        index={index}
                        key={`project_${index}`}
                    />
                ))}
            </ProjectsGrid>}
        </ProjectsContainer>
    )
};

export default Projects;