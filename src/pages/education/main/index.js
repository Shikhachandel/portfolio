import { useParams } from 'react-router-dom';
import { PageContainer, CollegeContentDiv, CollegeContentImage, Sentence, CollegeContentDetail } from '../../..//utils/styled-component'
import Educations from '../../../data/educations'
import CollegeTitle from '../../../components/college-title';
import parse from 'html-react-parser';

const EducationMain = () => {
    const { college_name } = useParams()

    const [current_edu] = Educations.filter(exp => exp.college_url_name === college_name);

    const {
        college_degree,
        college_title, 
        college_location,
        college_grade, 
        start_date,
        end_date,
        image,
        details
    } = current_edu;

    return (
        <PageContainer>
            <CollegeTitle title={college_title} location={college_location} start_date={start_date} end_date={end_date} degree={college_degree} grade={college_grade}/>
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