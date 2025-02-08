import Work from "../work";
import ProjectData from "../../../data/projects";
import {
    TagLayout,WorkLayout, GridTitleLayout, TagLayoutTitle,
    TagLayoutTitleDiv, TagLayoutSkillsDiv, TagLayoutSkillItems, TagLayoutSkillItemsActive, 
    TagLayoutTitleActive, ProjectsContainerGrid
} from "./style";
import { useState } from "react";
import { tagControl } from "./control";
import PageTitle from "../../../components/page-title";
import { PageContainer } from "../../../utils/styled-component";

const ProjectsMain = () => {

    const [projects, setProjects] = useState(ProjectData);
    const [activeTagId, setActiveTagId] = useState(0)

    const getTaggedWork = (tag, id) => {
        let selected_projects = ProjectData;
        if (tag !== '') {
            selected_projects = ProjectData.filter(
                experience => experience.tech_stack.includes(tag)
            );
        }
        setProjects(selected_projects);
        setActiveTagId(id);
    };

    return (
        <PageContainer>
            <ProjectsContainerGrid>
                <GridTitleLayout><PageTitle title={'Projects'}/></GridTitleLayout>
                <TagLayout>
                    <TagLayoutTitleDiv>
                        {
                            activeTagId === 0 ?
                                <TagLayoutTitleActive onClick={() => getTaggedWork('', 0)}>All works</TagLayoutTitleActive> :
                                <TagLayoutTitle onClick={() => getTaggedWork('', 0)}>All works</TagLayoutTitle>
                        }

                    </TagLayoutTitleDiv>
                    <TagLayoutSkillsDiv>
                        {
                            tagControl.map((tag) => {
                                if (tag.id === activeTagId) {
                                    return <TagLayoutSkillItemsActive key={tag.id} onClick={() => getTaggedWork(tag.name, tag.id)}>{tag.name}</TagLayoutSkillItemsActive>
                                } else {
                                    return <TagLayoutSkillItems key={tag.id} onClick={() => getTaggedWork(tag.name, tag.id)}>{tag.name}</TagLayoutSkillItems>
                                }
                            }

                            )
                        }
                    </TagLayoutSkillsDiv>
                </TagLayout>
                <WorkLayout>
                    {
                        projects.map((project, index) => (
                            <Work work={project} key={`work_${index}`} />
                        ))
                    }
                </WorkLayout>
            </ProjectsContainerGrid>
        </PageContainer>
    )
};

export default ProjectsMain;