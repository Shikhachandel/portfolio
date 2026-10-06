import professionalImage from "../../../icons/professional_image.jpg"
import githubLogo from "../../../svg/github.svg"
import linkedinLogo from "../../../svg/linked_in.svg"
import {
  MainContent, ProfileColumn, IntroContent, ProfileImage, Heading,
  HeadingText, HeadingTitle, HeadingSubtitle, SocialLinks, SocialLink, SocialIcon,
  Description, HighlightContent
} from './style'

function HomepageContent() {
  return (
    <MainContent>
      <ProfileColumn>
        <ProfileImage src={professionalImage} alt="Shikha Chandel" />
      </ProfileColumn>
      <IntroContent>
        <Heading>
          <HeadingText>
            <HeadingSubtitle>
              <strong>Shikha Virender Chandel - (AI Engineer &amp; Ph.D. Researcher)</strong>
            </HeadingSubtitle>
            <HeadingTitle>
              Turning AI research into practical applications
            </HeadingTitle>
            <SocialLinks aria-label="Contact links">
              <SocialLink href="https://www.linkedin.com/in/shikhachandel/" target="_blank" rel="noreferrer">
                <SocialIcon src={linkedinLogo} alt="" />
                LinkedIn
              </SocialLink>
              <SocialLink href="mailto:svchandel@aggies.ncat.edu">
                Gmail
              </SocialLink>
              <SocialLink href="https://github.com/Shikhachandel" target="_blank" rel="noreferrer">
                <SocialIcon src={githubLogo} alt="" />
                GitHub
              </SocialLink>
            </SocialLinks>
          </HeadingText>
        </Heading>
        <Description>
          I'm <HighlightContent>Shikha Chandel</HighlightContent>, an AI Engineer
          and Full Stack Developer specializing in
          Large Language Models (LLMs), Retrieval-Augmented Generation (RAG),
          Machine Learning, Deep Learning, Computer Vision, and scalable software
          development.<br />
          My experience combines AI research, Remote Sensing data, backend
          engineering, and full-stack
          development to create applications that are
          efficient, reliable, and user-focused. Whether it's designing AI-powered
          assistants, building recommendation systems, or
          developing enterprise-grade applications, I enjoy turning ideas into
          impactful products.<br />
          Currently, I'm focused on exploring the future of AI-driven applications
          with Remote Sensing while continuously expanding
          my expertise in software engineering, cloud technologies, and intelligent
          automation.
        </Description>
      </IntroContent>
    </MainContent>
  );
}

export default HomepageContent;
