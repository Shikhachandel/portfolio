import {
  TimelineWrapper,
  TimelineContainer,
  TimelineItem,
  TimelineDateBlock,
  TimelineStartDate,
  TimelineEndDate,
  TimelineMarkerCol,
  TimelineMarker,
  TimelineMarkerLink,
  TimelineRightSection,
  TimelineDesignation,
  TimelineTitle,
  TimelineLine,
} from "./style";

const ExperienceTimeline = ({ experiences }) => {
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = new Date(a.start_date.split("/").reverse().join("-"));
    const dateB = new Date(b.start_date.split("/").reverse().join("-"));
    return dateB - dateA;
  });

  return (
    <TimelineWrapper>
      <TimelineContainer>
        <TimelineLine />
        {sortedExperiences.map((work, index) => (
          <TimelineItem key={`timeline_${index}`}>
            <TimelineDateBlock>
              <TimelineStartDate>{work.start_date}</TimelineStartDate>
              <TimelineEndDate>{work.end_date}</TimelineEndDate>
            </TimelineDateBlock>
            <TimelineMarkerCol>
              <TimelineMarkerLink to={`/experiences/${work.work_url_name}`}>
                <TimelineMarker />
              </TimelineMarkerLink>
            </TimelineMarkerCol>
            <TimelineRightSection>
              <TimelineDesignation>{work.work_position}</TimelineDesignation>
              <TimelineTitle>{work.work_title}</TimelineTitle>
            </TimelineRightSection>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </TimelineWrapper>
  );
};

export default ExperienceTimeline;
