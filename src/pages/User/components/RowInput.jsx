import React from 'react'
import { Input } from '../../../components/Atoms'

const RowInput = (props) => {
  const { className = '', type = 'text', autoComplete = 'off', label } = props
  return (
    <div className="row g-3 align-center">
      <div className="col-lg-5">
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            {label}
          </label>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="form-group">
          <div className="form-control-wrap">
            <Input {...props} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RowInput
