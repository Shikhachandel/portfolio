import FormatDate from "../../commons/datetime";
import { Duration, Location, MainDiv, Title, Degree, Grade } from "./style"

const CollegeTitle = ({ degree, title, location, start_date, end_date, grade }) => {
    const formatted_start_date = FormatDate(start_date, 'DD/MM/YYYY', "MMM YY");
    const formatted_end_date = FormatDate(end_date, 'DD/MM/YYYY', "MMM YY");

    return (
        <MainDiv>
            <Title>{title}</Title>
            <Degree>{degree}</Degree>
            <Location>{location}</Location>
            <Grade>{grade}</Grade>
            <Duration> {formatted_start_date} - {formatted_end_date} </Duration>
        </MainDiv>
    )
};

export default CollegeTitle;