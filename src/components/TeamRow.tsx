import type { Contestant } from '../types/survivor'

type TeamRowProps = {
  name: string
  players: Contestant[]
  votedOff: Set<string>
  onSelect: (contestant: Contestant) => void
}

export default function TeamRow({ name, players, votedOff, onSelect }: TeamRowProps) {
  return (
    <section className="team-row" aria-label={`${name}'s team`}>
      <h2 className="team-title">{name}&apos;s Team</h2>
      <div className="team-grid">
        {players.map((contestant) => (
          <button
            type="button"
            className={`contestant-card ${votedOff.has(contestant.name) ? 'is-out' : ''}`}
            key={contestant.name}
            onClick={() => onSelect(contestant)}
          >
            <img
              className="contestant-photo"
              src={contestant.photo}
              alt={`${contestant.name} cast photo`}
            />
            <h3>{contestant.name}</h3>
          </button>
        ))}
      </div>
    </section>
  )
}
