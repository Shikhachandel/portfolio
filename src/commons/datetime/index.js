import moment from "moment";

const FormatDate = (date, from, to) => {
    // 'MMMM Do YYYY, h:mm:ss a'
    let currentDate = moment(date, from).format(to);
    return currentDate
}

export default FormatDate;