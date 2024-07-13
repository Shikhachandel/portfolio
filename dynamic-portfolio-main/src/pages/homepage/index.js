import Footer from "../../commons/footer";
import Header from "../../commons/header";
import ExperienceContent from "./experience";
import Projects from "./projects";
import Expertise from "./expertise";
import HomepageContent from "./main";
import { Page } from "./style.js";

function Homepage() {
  const hideLogo = false;

  return (
    <Page>
      <Header hideLogo={hideLogo} />
      <HomepageContent />
      <Expertise />
      <ExperienceContent />
      <Projects />
      <Footer />
    </Page>
  );
}

export default Homepage;
