import React from 'react'

interface KnownProps {
    message: string
}

const Known = ({message}: KnownProps) => {
  return (
    <p>{message}</p>
  )
}

export default Known