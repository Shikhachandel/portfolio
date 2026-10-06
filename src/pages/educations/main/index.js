import College from "../college";
import Educations from "../../../data/educations";
import { EducationContainerGrid, CollegeLayout, GridTitleLayout } from "./style";
import PageTitle from "../../../components/page-title";
import { PageContainer } from "../../../utils/styled-component";

const EducationsMain = () => {
    return (
        <PageContainer>
            <EducationContainerGrid>
                <GridTitleLayout><PageTitle title={'Education'} /></GridTitleLayout>
                <CollegeLayout>
                    {
                        Educations.map((education, index) => (
                            <College college={education} key={`college_${index}`} />
                        ))
                    }
                </CollegeLayout>
            </EducationContainerGrid>
        </PageContainer>
    )
};

export default EducationsMain;
