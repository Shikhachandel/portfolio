import {
  ExpertiseContent,
  ExpertiseContainer,
  SdeContainer,
  BoxTitleDiv,
  BackendContainer,
  FrontendContainer,
  BoxDescDiv,
  BoxIcon,
  BoxHeading,
  BoxDescQuote,
  BoxDescTag
} from "./style";
import sde_icon from "../../../icons/sde.png"
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
        <SdeContainer>
          <BoxTitleDiv>
            <BoxIcon $theme={theme_control[cookies.view]} src={sde_icon} alt="" />
            <BoxHeading>Software Developer</BoxHeading>
          </BoxTitleDiv>
          <BoxDescDiv>
            <BoxDescTag>&#60;bash&#62;</BoxDescTag>
            <BoxDescQuote>
              <br />
              Well versed with SDLC. <br />
              Understanding of OOPs concepts and
              Computers Networking <br />
              Understanding of Machine Learning 
              models and data analysis<br />
              <br />
            </BoxDescQuote>
            <BoxDescTag>&#60;bash&#62;</BoxDescTag>
          </BoxDescDiv>
        </SdeContainer>
        <BackendContainer>
          <BoxTitleDiv>
            <BoxIcon $theme={theme_control[cookies.view]} src={backend_icon} alt="" />
            <BoxHeading>Backend Developer</BoxHeading>
          </BoxTitleDiv>
          <BoxDescDiv>
            <BoxDescTag>Shikha-Lenovo ~ %</BoxDescTag>
            <BoxDescQuote>
              <br />
              Experience with ROR. Understanding of LLD and HLD.
              Smooth with RestAPIs and third party integrations. <br />
              <br />
            </BoxDescQuote>
            <BoxDescTag>Shikha-Lenovo ~ %</BoxDescTag>
          </BoxDescDiv>
        </BackendContainer>
        <FrontendContainer>
          <BoxTitleDiv>
            <BoxIcon $theme={theme_control[cookies.view]} src={frontend_icon} alt="" />
            <BoxHeading>Frontend Developer</BoxHeading>
          </BoxTitleDiv>
          <BoxDescDiv>
            <BoxDescTag>&#60;h2&#62;</BoxDescTag>
            <BoxDescQuote>
              <br />
              Skilled in developing and integrating Backend technologies using React.js  <br />
              <br />
            </BoxDescQuote>
            <BoxDescTag>&#60;h2&#62;</BoxDescTag>
          </BoxDescDiv>
        </FrontendContainer>
      </ExpertiseContainer>
    </ExpertiseContent>
  );
}

export default Expertise;
