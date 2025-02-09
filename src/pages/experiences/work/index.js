import { Brief, ContributionItem, ContributionList, ContributionTitle, Skill, SkillsDiv, Title, TitleDiv, TitleLink, WorkContainer, WorkDuration, WorkLocation, WorkPosition } from "./style";
import FormatDate from "../../../commons/datetime";

const Work = ({ work }) => {
    const start_date = FormatDate(work.start_date, 'DD/MM/YYYY', "MMM YY");
    const end_date = FormatDate(work.end_date, 'DD/MM/YYYY', "MMM YY");

    return (
        <WorkContainer>
            <TitleDiv>
                <Title><TitleLink to={`../experiences/${work.work_url_name}`}>{work.work_title}</TitleLink></Title>
                <WorkLocation>
                    {work.work_location}
                </WorkLocation>
            </TitleDiv>
            <TitleDiv>
                <WorkPosition>
                    {work.work_position}
                </WorkPosition>
                <WorkDuration>
                    {`${start_date} - ${end_date}`}
                </WorkDuration>
            </TitleDiv>

            <Brief>
                {work.brief}
            </Brief>

            Skills:
            <SkillsDiv>
                {work.tech_stack.map((skill, index) => (
                    <Skill key={`li_${index}`}>{skill}</Skill>
                ))}
            </SkillsDiv>

            {
                work.major_contributions?
                    (<div>
                        <ContributionTitle>Major contributions</ContributionTitle>
                        <ContributionList>
                            {
                                work.major_contributions.map((contribution, index) => (
                                    <ContributionItem key={`contribution_${index}`}>- {contribution.title}</ContributionItem>
                                ))
                            }
                        </ContributionList>
                    </div>) : ''
            }

        </WorkContainer>
    )
};

export default Work;