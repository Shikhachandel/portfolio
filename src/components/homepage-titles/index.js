import { ProjectTitle, TitleDiv } from "./style";

function HomepageTitle ({title}) {
    return(
            <TitleDiv>
                <ProjectTitle>{title}</ProjectTitle>
            </TitleDiv>            
    )
};

export default HomepageTitle;