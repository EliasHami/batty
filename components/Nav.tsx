import { NavLink } from '.'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
        <NavLink href="/buildings" className="nav-item nav-link">Buildings</NavLink>
      </div>
    </nav>
  )
}