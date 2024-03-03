import React from 'react'
import "./Button.scss"
const Button = ({text="View More"}) => {
  return (
    <div className="btn-container">
        <button>{text}</button>
    </div>
  )
}

export default Button
