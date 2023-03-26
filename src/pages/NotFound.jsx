import React from 'react'

export default function NotFound() {
  return (
    <>
      <h2>404 Not Found</h2>
      <p>Sorry but the location <b>{window.location.href}</b> does not exist.</p>
    </>
  )
}
