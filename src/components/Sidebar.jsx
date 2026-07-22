import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">RosterCreation</h1>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Create Player
        </NavLink>
        <NavLink
          to="/roster"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Roster Catalog
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
