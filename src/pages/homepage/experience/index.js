import HomepageTitle from "../../../components/homepage-titles";
import { ExpContainer, ExperienceGrid } from "./style";
import Experiences from "../../../data/experiences";
import ExperienceBox from "../../../components/experience-box";

function ExperienceContent() {
  const componentTitle = 'Experience'
  return (
    <ExpContainer>
      <HomepageTitle title={componentTitle} />
      <ExperienceGrid>
        {
          Experiences.map((work, index) => (
            <ExperienceBox
              key={`work_${index}`}
              work={work}
              index={index}
            />
          ))
        }
      </ExperienceGrid>
    </ExpContainer>
  );
}

export default ExperienceContent;
