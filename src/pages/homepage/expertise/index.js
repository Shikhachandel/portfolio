import {
  ExpertiseContent,
  ExpertiseContainer,
  SvcContainer,
  BoxTitleDiv,
  BackendContainer,
  FrontendContainer,
  BoxDescDiv,
  BoxIcon,
  BoxHeading,
  BoxDescQuote,
  BoxDescTag
} from "./style";
import svc_icon from "../../../icons/svc.png"
import backend_icon from "../../../icons/backend.png"
import frontend_icon from "../../../icons/frontend.png"
import { useCookies } from 'react-cookie'

function Expertise() {
  // eslint-disable-next-line
  const [cookies, _] = useCookies(['view'])

  const theme_control = { 'dark': 1, 'light': 0 };

  return (
    <ExpertiseContent>
      <ExpertiseContainer>
        <SvcContainer>
          <BoxTitleDiv>
            <BoxIcon $theme={theme_control[cookies.view]} src={svc_icon} alt="" />
            <BoxHeading>Software Developer</BoxHeading>
          </BoxTitleDiv>
          <BoxDescDiv>
            <BoxDescTag>Technical Proficiency</BoxDescTag>
            <BoxDescQuote>
              <br />
              Strong knowledge of Software Development Life Cycle (SDLC) and Agile methodologies.<br />
              Solid understanding of Object-Oriented Programming (OOP) concepts and Computer Networking.<br />
              Hands-on experience with Dash, Flask, HTML, and CSS for web development.<br />
              Proficient in developing and integrating backend technologies using React.js.<br />
              Held the title of Code Owner at Cogoport for 9 months.<br />
              <br />
            </BoxDescQuote>
            <BoxDescTag>Technical Proficiency</BoxDescTag>
          </BoxDescDiv>
        </SvcContainer>
        <BackendContainer>
          <BoxTitleDiv>
            <BoxIcon $theme={theme_control[cookies.view]} src={backend_icon} alt="" />
            <BoxHeading>Backend Developer</BoxHeading>
          </BoxTitleDiv>
          <BoxDescDiv>
            <BoxDescTag>Software Proficiency</BoxDescTag>
            <BoxDescQuote>
              <br />
              Proficient in Ruby on Rails (RoR) and Golang.<br />
              Strong understanding of Low-Level Design (LLD) and High-Level Design (HLD).<br />
              Experienced in working with RESTful APIs and integrating third-party services. <br />
              Hands-on experience with job scheduling and microservices architecture. <br />
              Skilled in scripting for data cleaning and preprocessing. <br />
              Comfortable using Vim for managing variables and code editing. <br />
              <br />
            </BoxDescQuote>
            <BoxDescTag>Software Proficiency</BoxDescTag>
          </BoxDescDiv>
        </BackendContainer>
        <FrontendContainer>
          <BoxTitleDiv>
            <BoxIcon $theme={theme_control[cookies.view]} src={frontend_icon} alt="" />
            <BoxHeading>Artificial Inteeligence</BoxHeading>
          </BoxTitleDiv>
          <BoxDescDiv>
            <BoxDescTag>Machine Learning & AI Development</BoxDescTag>
            <BoxDescQuote>
              <br />
              Proficient in Data Analysis and Machine Learning techniques.<br />
              Published a paper using knowledge of Machine Learning models.<br />
              Hands-on with scraping web data.<br />
              Experienced in working with Artificial Intelligence and Neural Networks.<br />
              Skilled in developing chatbots using LLM models such as Ollama, deepseek.<br />
              Leveraging LLM APIs with Groq and OpenAI. <br />
              <br />
            </BoxDescQuote>
            <BoxDescTag>Machine Learning & AI Development</BoxDescTag>
          </BoxDescDiv>
        </FrontendContainer>
      </ExpertiseContainer>
    </ExpertiseContent>
  );
}

export default Expertise;
