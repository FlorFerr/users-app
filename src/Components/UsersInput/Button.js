import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button type='submit' className='button'>{props.value}</button>
  )
}

export default Button