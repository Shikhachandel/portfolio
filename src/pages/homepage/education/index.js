import HomepageTitle from "../../../components/homepage-titles";
import { ExpContainer } from "./style";
import Educations from "../../../data/educations";
import EducationTimeline from "../../../components/education-timeline";

function EducationContent() {
  const componentTitle = 'Education'
  return (
    <ExpContainer>
      <HomepageTitle title={componentTitle} />
      <EducationTimeline educations={Educations} />
    </ExpContainer>
  );
}

export default EducationContent;
