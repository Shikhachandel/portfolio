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
    ProjectHeading,
    ProjectActions,
    ProjectAction,
    WorkContainer,
    WorkDuration
} from "./style";
import FormatDate from "../../../commons/datetime";

const Work = ({ work }) => {
    const start_date = FormatDate(work.start_date, 'DD/MM/YYYY', "MMM YY");
    const end_date = FormatDate(work.end_date, 'DD/MM/YYYY', "MMM YY");

    return (
        <WorkContainer>
            <TitleDiv>
                <ProjectHeading>
                    <Title>{work.project_title}</Title>
                    {(work.links?.github_url || work.links?.web_url) && (
                        <ProjectActions>
                            {work.links.github_url && (
                                <ProjectAction href={work.links.github_url} target="_blank" rel="noreferrer">
                                    Code link
                                </ProjectAction>
                            )}
                            {work.links.web_url && (
                                <ProjectAction href={work.links.web_url} target="_blank" rel="noreferrer">
                                    Published at
                                </ProjectAction>
                            )}
                        </ProjectActions>
                    )}
                </ProjectHeading>
                <WorkDuration>
                    {start_date === end_date ? start_date : `${start_date} - ${end_date}`}
                </WorkDuration>
            </TitleDiv>
            <Brief>
                {work.brief}
            </Brief>
            <SectionTitle>Tech Stack</SectionTitle>
            <SkillsDiv>
                {work.tech_stack.map((skill, index) => (
                    <Skill key={`skill_${index}`}>{skill}</Skill>
                ))}
            </SkillsDiv>

            {work.major_contributions?.length ? (
                <>
                    <ContributionTitle>Major Contributions</ContributionTitle>
                    <ContributionList>
                        {work.major_contributions.map((contribution, index) => (
                            <ContributionItem key={`contribution_${index}`}>
                                {contribution.title}
                            </ContributionItem>
                        ))}
                    </ContributionList>
                </>
            ) : null}
        </WorkContainer>
    )
};

export default Work;
