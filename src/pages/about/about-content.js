import { useCookies } from "react-cookie";
import githubLogo from "../../svg/github.svg";
import linkedinLogo from "../../svg/linked_in.svg";
import {
  AboutContainer,
  BioBox,
  ContactLink,
  Contacts,
  H1,
  H2,
  LogoIcon,
  LogoImgButton,
} from "./style.js";

import { PageContainer } from "../../utils/styled-component";

function AboutContent() {
  // eslint-disable-next-line
  const [cookies, _] = useCookies(["view"]);

  const email = "svchandel@aggies.ncat.edu";
  const themeControl = { dark: 1, light: 0 };

  return (
    <PageContainer>
      <AboutContainer>
        <H1>Shikha Virender Chandel</H1>
        <H2>AI Engineer</H2>

        <Contacts>
          <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
          <LogoIcon href="https://github.com/Shikhachandel" target="_blank" rel="noreferrer">
            <LogoImgButton
              $theme={themeControl[cookies.view]}
              src={githubLogo}
              alt="github"
            />
          </LogoIcon>
          <LogoIcon
            href="https://www.linkedin.com/in/shikhachandel/"
            target="_blank"
            rel="noreferrer"
          >
            <LogoImgButton src={linkedinLogo} alt="linkedin" />
          </LogoIcon>
          <ContactLink
            href={`${process.env.PUBLIC_URL}/Resume.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </ContactLink>
        </Contacts>

        <BioBox>
          <p>
            I am an AI Engineer and Full Stack Developer focused on building intelligent,
            scalable systems. I completed my Master's in Computer Science at UNC Charlotte
            in May 2025 and am now pursuing my Ph.D. in Applied Science and Technology at
            NC A&T State University, where my research centers on Artificial Intelligence,
            Remote Sensing, and Computer Vision.
          </p>
          <p>
            My experience spans AI research, backend engineering, full-stack development,
            RESTful APIs, Golang microservices, CI/CD pipelines, and large-scale background
            processing systems. I enjoy turning complex ideas into reliable, user-focused
            products and applying AI to real-world problems with measurable impact.
          </p>
        </BioBox>
      </AboutContainer>
    </PageContainer>
  );
}

export default AboutContent;
