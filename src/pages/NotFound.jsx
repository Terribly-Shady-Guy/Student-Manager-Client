import React from 'react'

export default function NotFound() {
  return (
    <>
      <h3>404 Not Found</h3>
      <p>Sorry but the location <b>{window.location.href}</b> does not exist.</p>
    </>
  )
}
