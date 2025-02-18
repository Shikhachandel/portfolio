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
            <H2>Full-Stack Software Engineer</H2>
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
            Welcome to my corner of innovation and technology! 
            <br />
            I am Shikha Chandel, 
            a passionate Software Developer currently pursuing my Master’s in Computer Science 
            at UNC Charlotte, set to graduate in May 2025. My journey in tech began with a 
            simple fascination for coding in high school, which quickly evolved into a deep 
            passion for problem-solving, software development, and artificial intelligence.
            <br />
            <br />
            Checkout my <ProjectLink to={'/experiences'} >Work</ProjectLink> to know more.
            <br />
            <br />
            From achieving a 9.6/10 CGPA in my Bachelor’s in Computer Science to 
            pursuing my Master’s at UNC Charlotte with a 3.77/4 CGPA, I have consistently 
            excelled as a student. Throughout my academic journey, I have worked with 
            Python, Java, and C++, completed courses in Deep Learning and Object-Oriented Programming, 
            and actively engaged in projects, including publishing research during my undergraduate studies.
            <br />
            <br />
            Beyond academics, I honed my leadership and interpersonal skills as a 
            student council member and class representative, organizing events and 
            liaising with faculty. I also participated in coding competitions and 
            volunteered to teach underprivileged students about the digital world.
            I am also a Teaching Assistant at UNC Charlotte, assisting Master’s 
            and PhD students in Artificial Intelligence, focusing on algorithms, 
            data structures, and machine learning concepts. Teaching has 
            strengthened my ability to break down complex ideas, mentor students, 
            and reinforce my expertise in AI.
            <br />
            <br />
            With one year of professional experience as an Associate Software Engineer 
            at Cogoport, I have worked on RESTful APIs, Golang microservices, system 
            architecture optimization, and database management. My projects have ranged 
            from customer service automation to large-scale background job processing. 
            Additionally, I’ve contributed to technical documentation and agile methodologies 
            as a Scrum Master, refining my ability to lead teams and manage software development lifecycles.
            <br />
            <br />
            My ultimate goal is to leverage technology to create impactful, scalable, and innovative 
            solutions while inspiring more women to break barriers in the tech industry.I remain eager to 
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
