import React from 'react';
import Registration from './Registration';

export default function RegistrationTable({registrationList}) {
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
        {registrationList.map((item) => (
          <Registration registrationItem={item} key={item.courseNumber} />
      ))}
      </tbody>
    </table>
  )
}