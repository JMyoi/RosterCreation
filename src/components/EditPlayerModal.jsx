import { useEffect, useState } from 'react'
import { POSITIONS } from '../utils/positions.js'
import './EditPlayerModal.css'

function EditPlayerModal({ player, onSave, onClose }) {
  const [form, setForm] = useState({
    name: player.name,
    height: player.height,
    position: player.position,
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await onSave(player.id, form)
    } catch (err) {
      setError(err.message)
      setSubmitting(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>
        <h2>Edit Player</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="edit-name">Player Name</label>
          <input
            id="edit-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="edit-height">Player Height</label>
          <input
            id="edit-height"
            name="height"
            type="text"
            value={form.height}
            onChange={handleChange}
            required
          />

          <label htmlFor="edit-position">Player Position</label>
          <select
            id="edit-position"
            name="position"
            value={form.position}
            onChange={handleChange}
          >
            {POSITIONS.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" disabled={submitting}>
            {submitting ? 'Saving…' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditPlayerModal
