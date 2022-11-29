import React from 'react'
import clsx from 'clsx'

const Input = (props) => {
  const { className = '', type = 'text', autoComplete = 'off' } = props

  return (
    <input
      autoComplete={autoComplete}
      type={type}
      className={clsx(className, 'form-control')}
      {...props}
    />
  )
}

export default Input
