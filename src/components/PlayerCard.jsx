import './PlayerCard.css'

function PlayerCard({ player, onEdit, onDelete }) {
  return (
    <div className="player-card">
      <div className="player-card-info">
        <h3>{player.name}</h3>
        <p>{player.height}</p>
        <p>{player.position}</p>
      </div>
      <div className="player-card-actions">
        <button
          type="button"
          className="icon-button"
          aria-label={`Edit ${player.name}`}
          onClick={() => onEdit(player)}
        >
          ✏️
        </button>
        <button
          type="button"
          className="icon-button"
          aria-label={`Delete ${player.name}`}
          onClick={() => onDelete(player)}
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default PlayerCard
