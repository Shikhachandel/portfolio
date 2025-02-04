import { useParams } from 'react-router-dom';
import { PageContainer, CollegeContentDiv, CollegeContentImage, Sentence, CollegeContentDetail } from '../../..//utils/styled-component'
import Educations from '../../../data/educations'
import CollegeTitle from '../../../components/college-title';
import parse from 'html-react-parser';

const EducationMain = () => {
    const { company_name } = useParams()

    const [current_exp] = Educations.filter(exp => exp.college_url_name === company_name);

    const {
        college_title,
        college_location,
        start_date,
        end_date,
        image,
        details
    } = current_exp;

    return (
        <PageContainer>
            <CollegeTitle title={college_title} location={college_location} start_date={start_date} end_date={end_date} />
            <CollegeContentDiv>
                <CollegeContentImage src={image} />
                <CollegeContentDetail>
                    {
                        details?.map((sentence, index) => (
                            <Sentence key={`sentence_${index}`}>
                                {parse(sentence)}
                            </Sentence>
                        ))
                    }
                </CollegeContentDetail>
            </CollegeContentDiv>
        </PageContainer>
    )
};

export default EducationMain;