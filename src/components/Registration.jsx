import React from 'react'

export default function Registration({props}) {
  const registrations = props.registrations.map((item, index) => (
    <tr key={index}>
      <td>{item.courseNumber}</td>
      <td>{item.credits}</td>
      <td>{item.attendenceType}</td>
      <td>{item.bookFormat}</td>
    </tr>
  ));

  return (
    <table>
    <thead>
      <tr>
        <th>Course #</th>
        <th>Credits</th>
        <th>Attendence Type</th>
        <th>Book Format</th>
      </tr>
    </thead>
    <tbody>
      {registrations}
    </tbody>
  </table>
  )
}