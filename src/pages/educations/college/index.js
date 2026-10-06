import {
    Brief,
    ContributionItem,
    ContributionList,
    ContributionTitle,
    Skill,
    SkillsDiv,
    SectionTitle,
    Title,
    TitleDiv,
    TitleLink,
    CollegeContainer,
    CollegeDuration,
    CollegeDegree,
    CollegeLocation,
    CollegeGrade
} from "./style";
import FormatDate from "../../../commons/datetime";

const College = ({ college }) => {
    const start_date = FormatDate(college.start_date, 'DD/MM/YYYY', "MMM YY");
    const end_date = FormatDate(college.end_date, 'DD/MM/YYYY', "MMM YY");

    return (
        <CollegeContainer>
            <TitleDiv>
                <Title><TitleLink to={`../educations/${college.college_url_name}`}>{college.college_title}</TitleLink></Title>
                <CollegeLocation>
                    {college.college_location}
                </CollegeLocation>
            </TitleDiv>
            <TitleDiv>
                <CollegeDegree>
                    {college.college_degree}
                </CollegeDegree>
                <CollegeDuration>
                    {`${start_date} - ${end_date}`}
                </CollegeDuration>
            </TitleDiv>
            <CollegeGrade>
                    {college.college_grade}
            </CollegeGrade>

            <Brief>
                {college.brief}
            </Brief>

            <SectionTitle>Tech Stack</SectionTitle>
            <SkillsDiv>
                {college.tech_stack.map((skill, index) => (
                    <Skill key={`skill_${index}`}>{skill}</Skill>
                ))}
            </SkillsDiv>

            {college.major_contributions?.length ? (
                <>
                    <ContributionTitle>Major Contributions</ContributionTitle>
                    <ContributionList>
                        {college.major_contributions.map((contribution, index) => (
                            <ContributionItem key={`contribution_${index}`}>
                                {contribution.web_url ? (
                                    <a href={contribution.web_url} target="_blank" rel="noopener noreferrer">
                                        {contribution.title}
                                    </a>
                                ) : (
                                    contribution.title
                                )}
                            </ContributionItem>
                        ))}
                    </ContributionList>
                </>
            ) : null}

        </CollegeContainer>
    )
};

export default College;
