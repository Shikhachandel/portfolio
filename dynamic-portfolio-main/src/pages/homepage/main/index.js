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
        <HeadingTitle>Hi, I'm Shikha !</HeadingTitle>
        <AmongUsImg src={doodleControl} />
      </Heading>
      <HorizontalLineContainer>
        <HorizontalLine />
      </HorizontalLineContainer>
      <Description>
        Welcome to my 'Corner of Professional Experiences'. I am <HighlightContent>Software Developer</HighlightContent> who
        thrives as a team player. <br />
        I work on interesting ideas to make them into reality without being bound to one certain technologies. Following the quote
        "A jack of all trades is a master of none, but oftentimes better than a master of one”
      </Description>
    </MainContent>
  );
}

export default HomepageContent;
