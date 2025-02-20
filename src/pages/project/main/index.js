import { Link, useParams } from "react-router-dom";
import projectData from "../../../data/projects";
import { PageContainer, Sentence, WorkContentDetail, WorkContentDiv, WorkContentImage } from '../../..//utils/styled-component'
import WorkTitle from '../../../components/work-title';
import parse from 'html-react-parser';


const ProjectMain = () => {
    const { project_name } = useParams();

    const project = projectData.find(project => project.project_url_name === project_name);

    const {
        project_title,
        start_date,
        end_date,
        image,
        details,
        links
    } = project

    return (
        <PageContainer>
            <WorkTitle title={project_title} start_date={start_date} end_date={end_date} />
            <WorkContentDiv>
                <WorkContentImage src={image} />
                <WorkContentDetail>
                    <li><em>Checkout the <Link to={links.github_url} target="_blank" style={{color: 'var(--pallet-3)'}}>code</Link></em></li>
                    <li><em>Checkout the <Link to={links.web_url} target="_blank" style={{color: 'var(--pallet-3)'}}>app</Link></em></li>
                    
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

export default ProjectMain;