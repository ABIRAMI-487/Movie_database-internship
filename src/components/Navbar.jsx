import { NavLink, Link } from 'react-router-dom'

export default function Navbar({ count }) {
  const cls = ({ isActive }) => (isActive ? 'active' : '')
  return (
    <header className="nav">
      <Link to="/" className="logo">🎬 MovieDB</Link>
      <nav>
        <NavLink to="/" end className={cls}>Home</NavLink>
        <NavLink to="/favorites" className={cls}>Favorites ({count})</NavLink>
      </nav>
    </header>
  )
}
