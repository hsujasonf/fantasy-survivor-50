import type { Contestant } from '../types/survivor'

type TribeInfoProps = {
  contestant: Contestant
  statusLabel: string | null
}

export default function TribeInfo({ contestant, statusLabel }: TribeInfoProps) {
  return (
    <div className="pf-layout">
      <img
        className="pf-photo"
        src={contestant.photo}
        alt={`${contestant.name} PF`}
      />
      <div className="pf-details">
        <h2>
          {contestant.name}
          {statusLabel ? <span className="player-status"> - {statusLabel}</span> : null}
        </h2>
        <p><strong>Age:</strong> {contestant.age}</p>
        <p><strong>Hometown:</strong> {contestant.hometown}</p>
        <p><strong>Seasons:</strong> {contestant.seasons.join(', ')}</p>
        {contestant.advantage && (
          <p className="advantage-info">Advantage: {contestant.advantage}</p>
        )}
      </div>
    </div>
  )
}
