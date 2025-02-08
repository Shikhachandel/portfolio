import HomepageTitle from "../../../components/homepage-titles";
import { ExpContainer, EducationGrid } from "./style";
import Educations from "../../../data/educations";
import EducationBox from "../../../components/education-box";

function EducationContent() {
  const componentTitle = 'Education'
  return (
    <ExpContainer>
      <HomepageTitle title={componentTitle} />
      <EducationGrid>
        {
          Educations.map((college, index) => (
            <EducationBox
              key={`college_${index}`}
              college={college}
              index={index}
            />
          ))
        }
      </EducationGrid>
    </ExpContainer>
  );
}

export default EducationContent;
