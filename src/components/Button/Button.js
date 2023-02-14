import React from 'react'
import "./Button.css"


const Button = ({children,variant,...props}) => {
  return (
    <button className={`btn ${variant}`} {...props}>{children}</button>
  )
}

export default Button