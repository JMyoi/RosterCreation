import { useState } from 'react'
import './CreatePlayer.css'

const POSITIONS = [
  'Point Guard',
  'Shooting Guard',
  'Small Forward',
  'Power Forward',
  'Center',
]

const initialForm = { name: '', height: '', position: POSITIONS[0] }

function CreatePlayer() {
  const [form, setForm] = useState(initialForm)
  const [lastCreated, setLastCreated] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setLastCreated(form)
    setForm(initialForm)
  }

  return (
    <div className="create-player">
      <h2>Create Player</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Player Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Jordan Smith"
          required
        />

        <label htmlFor="height">Player Height</label>
        <input
          id="height"
          name="height"
          type="text"
          value={form.height}
          onChange={handleChange}
          placeholder={'e.g. 6\'5"'}
          required
        />

        <label htmlFor="position">Player Position</label>
        <select
          id="position"
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

        <button type="submit">Create Player</button>
      </form>

      {lastCreated && (
        <p className="confirmation">
          Created {lastCreated.name} ({lastCreated.height},{' '}
          {lastCreated.position})
        </p>
      )}
    </div>
  )
}

export default CreatePlayer
