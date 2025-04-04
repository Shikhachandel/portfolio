import FormatDate from "../../commons/datetime";
import { Duration, Location, MainDiv, Title, Position } from "./style"

const WorkTitle = ({ title, location, start_date, end_date, position }) => {
    const formatted_start_date = FormatDate(start_date, 'DD/MM/YYYY', "MMM YY");
    const formatted_end_date = FormatDate(end_date, 'DD/MM/YYYY', "MMM YY");

    return (
        <MainDiv>
            <Title>{title}</Title>
            <Position>{position}</Position>
            <Location>{location}</Location>
            <Duration> {formatted_start_date} - {formatted_end_date} </Duration>
        </MainDiv>
    )
};

export default WorkTitle;