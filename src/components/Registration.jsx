import React from 'react'

export default function Registration({props}) {
  return (
    <tr>
      <td>{props.courseNumber}</td>
      <td>{props.credits}</td>
      <td>{props.attendenceType}</td>
      <td>{props.bookFormat}</td>
    </tr>
  )
}
