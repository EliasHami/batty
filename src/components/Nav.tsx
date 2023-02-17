import React from 'react'
import { NavLink } from '.'

const Nav: React.FC = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
        <NavLink href="/constructions" className="nav-item nav-link">Constructions</NavLink>
        <NavLink href="/invoices" className="nav-item nav-link">Invoices</NavLink>
      </div>
    </nav>
  )
}

export default Nav