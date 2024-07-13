import { Link } from "react-router-dom";
import { BoxContainer, ProjectDescprition, ProjectImage, ProjectImageBox, ProjectLink, ProjectTextContent, ProjectTitle } from "./style";

const ProjectBox = ({ project, index }) => {
    return (
        <BoxContainer key={`project_${index}`} >
            <ProjectImageBox>
                <Link to={project.links.web_url} target="_blank">
                    <ProjectImage src={project.image} alt={project.project_title} />
                </Link>
            </ProjectImageBox>
            <ProjectTextContent>
                <ProjectTitle>
                    {project.project_title}
                </ProjectTitle>
                <ProjectDescprition>{project.desc}</ProjectDescprition>
                <ProjectLink to={`/projects/${project.project_url_name}`}>
                    Learn More &#8594;
                </ProjectLink>
            </ProjectTextContent>
        </BoxContainer>
    )
};

export default ProjectBox;