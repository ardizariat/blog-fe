import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div
      className="nk-sidebar nk-sidebar-fixed is-light "
      data-content="sidebarMenu"
    >
      <div className="nk-sidebar-element nk-sidebar-head">
        <div className="nk-sidebar-brand">
          <a href="html/index.html" className="logo-link nk-sidebar-logo">
            <img className="logo-light logo-img" src="#" alt="logo" />
            <img className="logo-dark logo-img" src="#" alt="logo-dark" />
            <img
              className="logo-small logo-img logo-img-small"
              src="#"
              alt="logo-small"
            />
          </a>
        </div>
        <div className="nk-menu-trigger mr-n2">
          <a
            href="#"
            className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
            data-target="sidebarMenu"
          >
            <em className="icon ni ni-arrow-left" />
          </a>
          <a
            href="#"
            className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
            data-target="sidebarMenu"
          >
            <em className="icon ni ni-menu" />
          </a>
        </div>
      </div>
      {/* .nk-sidebar-element */}
      <div className="nk-sidebar-element">
        <div className="nk-sidebar-content">
          <div className="nk-sidebar-menu" data-simplebar="">
            <ul className="nk-menu">
              <li className="nk-menu-heading">
                <h6 className="overline-title text-primary-alt">
                  Use-Case Preview
                </h6>
              </li>
              {/* .nk-menu-item */}
              <li className="nk-menu-item">
                <Link to="/user" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-users-fill" />
                  </span>
                  <span className="nk-menu-text">Users</span>
                </Link>
              </li>
            </ul>
            {/* .nk-menu */}
          </div>
          {/* .nk-sidebar-menu */}
        </div>
        {/* .nk-sidebar-content */}
      </div>
      {/* .nk-sidebar-element */}
    </div>
  )
}

export default Sidebar
