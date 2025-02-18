import lightDoodle from "../../../icons/light-doodle.png"
import darkDoodle from "../../../icons/dark-doodle.png"
import {
  MainContent, AmongUsImg, Heading,
  HeadingTitle, Description, HighlightContent,
  HorizontalLineContainer, HorizontalLine
} from './style'
import { useCookies } from "react-cookie";

function HomepageContent() {
  // eslint-disable-next-line
  const [cookies, _] = useCookies(['view'])

  const doodleControl = cookies.view === 'dark' ? darkDoodle : lightDoodle

  return (
    <MainContent>
      <Heading>
        <HeadingTitle>Hello, <br />I'm Shikha !</HeadingTitle>
        <AmongUsImg src={doodleControl} />
      </Heading>
      <HorizontalLineContainer>
        <HorizontalLine />
      </HorizontalLineContainer>
      <Description>
      Welcome to my 'Space of Innovation and Problem-Solving'.
      I'm a <HighlightContent>Software Developer</HighlightContent> passionate about crafting efficient, scalable, and impactful solutions. 
      I thrive in collaborative environments and constantly push the boundaries of technology, embracing adaptability and 
      continuous learning.<br/>
      As the saying goes, <HighlightContent>"The only way to do great work is to love what you do"</HighlightContent>, and I believe in channeling my passion for 
      AI, Machine Learning, and Backend Development into building systems that make a difference. 
      With experience in Java, Golang, Ruby on Rails, Python and Node.js, I enjoy working across diverse technologies and 
      architecting robust solutions.
      </Description>
    </MainContent>
  );
}

export default HomepageContent;
