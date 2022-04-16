import React from 'react'
import { NavLink } from '.'

const Nav:React.FC = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
        <NavLink href="/buildings" className="nav-item nav-link">Buildings</NavLink>
      </div>
    </nav>
  )
}

export default Nav