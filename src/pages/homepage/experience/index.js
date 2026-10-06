import HomepageTitle from "../../../components/homepage-titles";
import { ExpContainer } from "./style";
import Experiences from "../../../data/experiences";
import ExperienceTimeline from "../../../components/experience-timeline";

function ExperienceContent() {
  const componentTitle = 'Experience'
  return (
    <ExpContainer>
      <HomepageTitle title={componentTitle} />
      <ExperienceTimeline experiences={Experiences} />
    </ExpContainer>
  );
}

export default ExperienceContent;
