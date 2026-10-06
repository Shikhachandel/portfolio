import Work from "../work";
import ProjectData from "../../../data/projects";
import { WorkLayout, GridTitleLayout, ProjectsContainerGrid } from "./style";
import PageTitle from "../../../components/page-title";
import { PageContainer } from "../../../utils/styled-component";

const ProjectsMain = () => {
    return (
        <PageContainer>
            <ProjectsContainerGrid>
                <GridTitleLayout><PageTitle title={'Projects'} /></GridTitleLayout>
                <WorkLayout>
                    {
                        ProjectData.map((project, index) => (
                            <Work work={project} key={`work_${index}`} />
                        ))
                    }
                </WorkLayout>
            </ProjectsContainerGrid>
        </PageContainer>
    )
};

export default ProjectsMain;
