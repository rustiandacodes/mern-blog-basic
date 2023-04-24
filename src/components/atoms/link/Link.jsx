import React from 'react'
import './link.scss'

const Link = ({ content, onClick }) => {
  return (
    <div className="link" onClick={onClick}>
      {content}
    </div>
  )
}

export default Link
