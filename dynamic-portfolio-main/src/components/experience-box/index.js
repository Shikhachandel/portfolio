import { Link } from "react-router-dom";
import { ExperienceBoxContiner, ExperienceDescprition, ExperienceImage, ExperienceImageBox, 
    ExperienceLink, ExperienceTextContent, ExperienceTitle } from "./style";

const ExperienceBox = ({work}) => {
    return (<ExperienceBoxContiner>
        <ExperienceImageBox>
            <Link to={work.links.web_url} target="_blank">
                <ExperienceImage src={work.image} alt={work.work_title} />
            </Link>
        </ExperienceImageBox>
        <ExperienceTextContent>
            <ExperienceTitle>
                {work.work_title}
            </ExperienceTitle>
            <ExperienceDescprition>{work.description}</ExperienceDescprition>
            <ExperienceLink to={`/experiences/${work.work_url_name}`}>
                Learn More &#8594;
            </ExperienceLink>
        </ExperienceTextContent>
    </ExperienceBoxContiner>
    )
};

export default ExperienceBox;