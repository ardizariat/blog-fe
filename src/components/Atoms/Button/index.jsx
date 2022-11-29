import React from 'react'
import clsx from 'clsx'

const Button = (props) => {
  const { className = 'btn-primary', type = 'submit', text = 'Save' } = props
  return (
    <button {...props} type={type} className={clsx(className, 'btn')}>
      {text}
    </button>
  )
}

export default Button
