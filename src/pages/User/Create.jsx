import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input } from '../../components/Atoms'
import RowInput from './components/RowInput'
import axios from 'axios'

const Create = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [inputs, setInputs] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    gender: '',
  })

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value, username })
  }

  const setUsernameUser = (name) => {
    let replace = name.split(' ').join('_')
    replace = replace.toLowerCase()
    setUsername(replace)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const header = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `http://127.0.0.1:8001/api/v1/user`,
        inputs,
        header
      )
      navigate('/user')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="nk-content ">
      <div className="container-fluid">
        <div className="nk-content-inner">
          <div className="nk-content-body">
            <div className="components-preview mx-auto">
              <div className="nk-block-head nk-block-head-lg wide-sm">
                <div className="nk-block-head-content">
                  <div className="nk-block-head-sub">
                    <Link className="btn btn-outline-dark" to="/user">
                      <em className="icon ni ni-arrow-left" />
                      <span>Back</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* .nk-block */}
              <div className="nk-block nk-block-lg">
                <div className="nk-block-head">
                  <div className="nk-block-head-content">
                    <h4 className="title nk-block-title">Create User</h4>
                  </div>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <div className="card-head">
                      <h5 className="card-title">Form Create New User</h5>
                    </div>
                    <form onSubmit={handleSubmit} className="gy-3">
                      <RowInput
                        label="Full Name"
                        name="name"
                        onKeyUp={(e) => setUsernameUser(e.target.value)}
                        onChange={onChange}
                      />
                      <RowInput
                        name="username"
                        label="Username"
                        value={username}
                        readOnly
                      />

                      <RowInput
                        onChange={onChange}
                        name="email"
                        label="Email"
                        type="email"
                      />

                      <RowInput
                        onChange={onChange}
                        name="password"
                        label="Password"
                        type="password"
                      />

                      <div className="row g-3 align-center">
                        <div className="col-lg-5">
                          <div className="form-group">
                            <label className="form-label">Gender</label>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <ul className="custom-control-group g-3 align-center flex-wrap">
                            <li>
                              <div className="custom-control custom-radio">
                                <Input
                                  type="radio"
                                  className="custom-control-input"
                                  name="gender"
                                  value="laki-laki"
                                  id="laki-laki"
                                  onChange={onChange}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="laki-laki"
                                >
                                  Laki Laki
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="custom-control custom-radio">
                                <Input
                                  type="radio"
                                  className="custom-control-input"
                                  name="gender"
                                  value="perempuan"
                                  id="perempuan"
                                  onChange={onChange}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="perempuan"
                                >
                                  Perempuan
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row g-3">
                        <div className="col-lg-7 offset-lg-5">
                          <div className="form-group mt-2">
                            <Button className="btn-dark" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* card */}
              </div>
            </div>
            {/* .components-preview */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
