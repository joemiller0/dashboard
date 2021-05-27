

const Day = ({ date, fullDate }) => {
    console.log(fullDate)
    return (
        <td className="day" full-date={fullDate}>
            {date}
        </td>
    );
};

export default Day;

