import { useEffect, useState } from 'react'
import { getPlayers, updatePlayer, deletePlayer } from '../api/players.js'
import PlayerCard from '../components/PlayerCard.jsx'
import EditPlayerModal from '../components/EditPlayerModal.jsx'
import './RosterCatalog.css'

function RosterCatalog() {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editingPlayer, setEditingPlayer] = useState(null)

  useEffect(() => {
    getPlayers()
      .then(setPlayers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  async function handleDelete(player) {
    if (!window.confirm(`Delete ${player.name}?`)) return
    try {
      await deletePlayer(player.id)
      setPlayers((prev) => prev.filter((p) => p.id !== player.id))
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleSave(id, form) {
    const updated = await updatePlayer(id, form)
    setPlayers((prev) => prev.map((p) => (p.id === id ? updated : p)))
    setEditingPlayer(null)
  }

  return (
    <div className="roster-catalog">
      <h2>Roster Catalog</h2>

      {loading && <p>Loading players…</p>}
      {error && <p className="form-error">{error}</p>}
      {!loading && !error && players.length === 0 && (
        <p>No players yet — create one to get started.</p>
      )}

      <div className="roster-list">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            onEdit={setEditingPlayer}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {editingPlayer && (
        <EditPlayerModal
          player={editingPlayer}
          onSave={handleSave}
          onClose={() => setEditingPlayer(null)}
        />
      )}
    </div>
  )
}

export default RosterCatalog
