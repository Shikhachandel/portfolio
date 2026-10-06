import {
  TimelineContainer,
  TimelineItem,
  TimelineMarker,
  TimelineMarkerLink,
  TimelineDate,
  TimelineDegree,
  TimelineTitle,
  TimelineLine,
  TimelineInfo,
} from "./style";

const EducationTimeline = ({ educations }) => {
  const sortedEducations = [...educations].sort((a, b) => {
    const dateA = new Date(a.start_date.split("/").reverse().join("-"));
    const dateB = new Date(b.start_date.split("/").reverse().join("-"));
    return dateB - dateA;
  });

  return (
    <TimelineContainer>
      <TimelineLine />
      {sortedEducations.map((college) => (
        <TimelineItem key={college.college_url_name}>
          <TimelineDate>
            <span>{college.start_date}</span>
            <span>{college.end_date}</span>
          </TimelineDate>
          <TimelineMarkerLink to={`/educations/${college.college_url_name}`}>
            <TimelineMarker />
          </TimelineMarkerLink>
          <TimelineInfo>
            <TimelineDegree>{college.college_degree}</TimelineDegree>
            <TimelineTitle>{college.college_title}</TimelineTitle>
          </TimelineInfo>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default EducationTimeline;
