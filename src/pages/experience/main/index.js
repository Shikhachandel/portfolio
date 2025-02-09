import { useParams } from 'react-router-dom';
import { PageContainer, WorkContentDiv, WorkContentImage, Sentence, WorkContentDetail } from '../../..//utils/styled-component'
import Experiences from '../../../data/experiences'
import WorkTitle from '../../../components/work-title';
import parse from 'html-react-parser';

const ExperienceMain = () => {
    const { company_name } = useParams()

    const [current_exp] = Experiences.filter(exp => exp.work_url_name === company_name);

    const {
        work_title,
        work_position,
        work_location,
        start_date,
        end_date,
        image,
        details
    } = current_exp;

    return (
        <PageContainer>
            <WorkTitle title={work_title} position= {work_position} location={work_location} start_date={start_date} end_date={end_date} />
            <WorkContentDiv>
                <WorkContentImage src={image} />
                <WorkContentDetail>
                    {
                        details?.map((sentence, index) => (
                            <Sentence key={`sentence_${index}`}>
                                {parse(sentence)}
                            </Sentence>
                        ))
                    }
                </WorkContentDetail>
            </WorkContentDiv>
        </PageContainer>
    )
};

export default ExperienceMain;