import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import CreatePlayer from './pages/CreatePlayer.jsx'
import RosterCatalog from './pages/RosterCatalog.jsx'
import './App.css'

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<CreatePlayer />} />
          <Route path="/roster" element={<RosterCatalog />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
