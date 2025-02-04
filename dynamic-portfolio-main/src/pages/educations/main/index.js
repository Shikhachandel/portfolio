import College from "../college";
import Educations from "../../../data/educations";
import {
    EducationContainerGrid, TagLayout, CollegeLayout, GridTitleLayout, 
    TagLayoutTitle, TagLayoutTitleDiv, TagLayoutSkillsDiv, 
    TagLayoutSkillItems, TagLayoutSkillItemsActive, TagLayoutTitleActive
} from "./style";
import { useState } from "react";
import { tagControl } from "./control";
import PageTitle from "../../../components/page-title";
import { PageContainer } from "../../../utils/styled-component";

const EducationsMain = () => {

    const [educations, setEducations] = useState(Educations);
    const [activeTagId, setActiveTagId] = useState(0)

    const getTaggedCollege = (tag, id) => {
        let selected_educations = Educations;
        if (tag !== '') {
            selected_educations = Educations.filter(
                education => education.tech_stack.includes(tag)
            );
        }
        setEducations(selected_educations);
        setActiveTagId(id);
    };

    return (
        <PageContainer>
            <EducationContainerGrid>
                <GridTitleLayout><PageTitle title={'Education'}/></GridTitleLayout>
                <TagLayout>
                    <TagLayoutTitleDiv>
                        {
                            activeTagId === 0 ?
                                <TagLayoutTitleActive onClick={() => getTaggedCollege('', 0)}>All colleges</TagLayoutTitleActive> :
                                <TagLayoutTitle onClick={() => getTaggedCollege('', 0)}>All colleges</TagLayoutTitle>
                        }

                    </TagLayoutTitleDiv>
                    <TagLayoutSkillsDiv>
                        {
                            tagControl.map((tag) => {
                                if (tag.id === activeTagId) {
                                    return <TagLayoutSkillItemsActive key={tag.id} onClick={() => getTaggedCollege(tag.name, tag.id)}>{tag.name}</TagLayoutSkillItemsActive>
                                } else {
                                    return <TagLayoutSkillItems key={tag.id} onClick={() => getTaggedCollege(tag.name, tag.id)}>{tag.name}</TagLayoutSkillItems>
                                }
                            }

                            )
                        }
                    </TagLayoutSkillsDiv>
                </TagLayout>
                <CollegeLayout>
                    {
                        educations.map((education, index) => (
                            <College college={education} key={`college_${index}`} />
                        ))
                    }
                </CollegeLayout>
            </EducationContainerGrid>
        </PageContainer>
    )
};

export default EducationsMain;