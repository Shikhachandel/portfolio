import Work from "../work";
import Experiences from "../../../data/experiences";
import { ExperienceContainerGrid, WorkLayout, GridTitleLayout } from "./style";
import PageTitle from "../../../components/page-title";
import { PageContainer } from "../../../utils/styled-component";

const ExperiencesMain = () => {
    return (
        <PageContainer>
            <ExperienceContainerGrid>
                <GridTitleLayout><PageTitle title={'Experience'} /></GridTitleLayout>
                <WorkLayout>
                    {
                        Experiences.map((experience, index) => (
                            <Work work={experience} key={`work_${index}`} />
                        ))
                    }
                </WorkLayout>
            </ExperienceContainerGrid>
        </PageContainer>
    )
};

export default ExperiencesMain;
