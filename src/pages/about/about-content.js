import { useCookies } from "react-cookie";
import githubLogo from "../../svg/github.svg";
import linkedinLogo from "../../svg/linked_in.svg";
import {
  AboutContainer,
  Contacts,
  Dash, H1, H2,
  LeftContainer,
  LeftContent,
  RightContainer,
  RightContent,
  Button,
  LogoIcon,
  LogoImgButton,
  ProjectLink,
  Resume
} from "./style.js";
import { PageContainer } from "../../utils/styled-component";
import { ResumeLink } from "../../utils/global-constants.js";

function AboutContent() {
  // eslint-disable-next-line
  const [cookies, _] = useCookies(['view'])

  const theme_control = { 'dark': 1, 'light': 0 };

  return (
    <PageContainer>
      <AboutContainer>
        <LeftContainer>
          <LeftContent>
            <H1>
              Shikha Chandel <Dash />
            </H1>
            <H2>Backend Software Engineer</H2>
            <Contacts>
              <Button to="/contact">
                Get in touch
              </Button>
              <LogoIcon
                to="https://github.com/Shikhachandel"
                target="_blank"
              >
                <LogoImgButton $theme={theme_control[cookies.view]} src={githubLogo} alt="github" />
              </LogoIcon>
              <LogoIcon
                to="https://www.linkedin.com/in/shikhachandel/"
                target="_blank"
              >
                <LogoImgButton src={linkedinLogo} alt="linkedin" />
              </LogoIcon>
            </Contacts>
            <Resume
              to={ResumeLink}
              target="_blank"
            > {'->'} Download Resume</Resume>
          </LeftContent>
        </LeftContainer>
        <RightContainer>
          <RightContent>
            I am a versatile and driven Software Engineer with one year of professional 
            experience. My work history demonstrates my adaptability across various 
            programming languages and my enthusiasm for problem-solving. Whether 
            developing websites or tackling machine learning challenges, I bring a 
            passionate and flexible approach to every project.
            <br />
            <br />
            Checkout my <ProjectLink to={'/experiences'} >Work</ProjectLink> to know more.
            <br />
            <br />
            My journey in the world of technology began in 10th grade, where I first 
            encountered coding through shape-drawing exercises. This early exposure 
            blossomed into a full-fledged passion during my bachelor's in Computer Science 
            and Technology. Throughout my academic career, I immersed myself in a diverse 
            array of programming languages and concepts, from Python and Java to database 
            management and hardware studies.
            <br />
            <br />
            Beyond academics, I honed my leadership and interpersonal skills as a 
            student council member and class representative, organizing events and 
            liaising with faculty. I also participated in coding competitions and 
            volunteered to teach underprivileged students about the digital world.
            <br />
            <br />
            My professional experience as an Associate Software Engineer at 
            Cogoport Private Limited further refined my technical skills and taught me 
            invaluable lessons in teamwork and problem-solving. Now, as an international 
            student at UNC Charlotte, I'm expanding my horizons and staying abreast 
            of cutting-edge technologies.
            <br />
            <br />
            My ultimate goal is to leverage technology to make the world a better place, 
            focusing on efficiency and optimization in my projects. I remain eager to 
            explore new opportunities and contribute to innovative solutions in the 
            ever-evolving tech landscape.
            <br />
            <br />
            If you believe that I could be of assistance with your project or excel 
            at your company's codebase, please do not hesitate to get in touch with me. I
            am always open to exploring new opportunities and am excited to hear
            from you.
          </RightContent>
        </RightContainer>
      </AboutContainer>
    </PageContainer>
  );
}

export default AboutContent;
