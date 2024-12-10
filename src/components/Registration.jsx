export default function Registration({ registrationItem }) {
    return (
        <tr>
            <td>{registrationItem.courseNumber}</td>
            <td>{registrationItem.credits}</td>
            <td>{registrationItem.attendenceType}</td>
            <td>{registrationItem.bookFormat}</td>
        </tr>
    );
}