import Footer from "../../commons/footer";
import Header from "../../commons/header";
import EducationContent from "./education";
import ExperienceContent from "./experience";
import Publications from "./publications";
// import Expertise from "./expertise";
import HomepageContent from "./main";
import { HomepageColumns, Page } from "./style.js";

function Homepage() {
  return (
    <Page>
      <Header hideLogo={false} />
      <HomepageContent />
      {/* <Expertise /> */}
      <HomepageColumns>
        <EducationContent />
        <ExperienceContent />
        <Publications />
      </HomepageColumns>
      <Footer />
    </Page>
  );
}

export default Homepage;
