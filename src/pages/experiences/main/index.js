import Work from "../work";
import Experiences from "../../../data/experiences";
import {
    ExperienceContainerGrid, TagLayout, WorkLayout, GridTitleLayout, 
    TagLayoutTitle, TagLayoutTitleDiv, TagLayoutSkillsDiv, 
    TagLayoutSkillItems, TagLayoutSkillItemsActive, TagLayoutTitleActive
} from "./style";
import { useState } from "react";
import { tagControl } from "./control";
import PageTitle from "../../../components/page-title";
import { PageContainer } from "../../../utils/styled-component";

const ExperiencesMain = () => {

    const [experiences, setExperiences] = useState(Experiences);
    const [activeTagId, setActiveTagId] = useState(0)

    const getTaggedWork = (tag, id) => {
        let selected_experiences = Experiences;
        if (tag !== '') {
            selected_experiences = Experiences.filter(
                experience => experience.tech_stack.includes(tag)
            );
        }
        setExperiences(selected_experiences);
        setActiveTagId(id);
    };

    return (
        <PageContainer>
            <ExperienceContainerGrid>
                <GridTitleLayout><PageTitle title={'Experience'}/></GridTitleLayout>
                <TagLayout>
                    <TagLayoutTitleDiv>
                        {
                            activeTagId === 0 ?
                                <TagLayoutTitleActive onClick={() => getTaggedWork('', 0)}>Technologies</TagLayoutTitleActive> :
                                <TagLayoutTitle onClick={() => getTaggedWork('', 0)}>Technologies</TagLayoutTitle>
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
                        experiences.map((experience, index) => (
                            <Work work={experience} key={`work_${index}`} />
                        ))
                    }
                </WorkLayout>
            </ExperienceContainerGrid>
        </PageContainer>
    )
};

export default ExperiencesMain;