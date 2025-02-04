import { Link } from "react-router-dom";
import { EducationBoxContiner, EducationDescprition, EducationImage, EducationImageBox, 
    EducationLink, EducationTextContent, EducationTitle } from "./style";

const EducationBox = ({college}) => {
    return (<EducationBoxContiner>
        <EducationImageBox>
            <Link to={college.links.web_url} target="_blank">
                <EducationImage src={college.image} alt={college.college_title} />
            </Link>
        </EducationImageBox>
        <EducationTextContent>
            <EducationTitle>
                {college.college_title}
            </EducationTitle>
            <EducationDescprition>{college.description}</EducationDescprition>
            <EducationLink to={`/educations/${college.college_url_name}`}>
                Learn More &#8594;
            </EducationLink>
        </EducationTextContent>
    </EducationBoxContiner>
    )
};

export default EducationBox;