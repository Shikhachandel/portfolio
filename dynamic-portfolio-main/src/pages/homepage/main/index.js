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
        Welcome to my 'Hub of Innovation and Growth'. I'm a <HighlightContent>Software Developer </HighlightContent>  
        with a passion for turning creative ideas into real-world solutions. 
        I thrive in collaborative environments and enjoy working across diverse technologies, embracing flexibility 
        and continuous learning.<br />
        As the saying goes, “A jack of all trades is a master of none, but oftentimes better than a master of one,” 
        and I believe in broadening my skill set to tackle challenges from multiple perspectives.
      </Description>
    </MainContent>
  );
}

export default HomepageContent;
