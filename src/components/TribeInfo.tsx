import type { Contestant } from '../types/survivor'

type TribeInfoProps = {
  contestant: Contestant
}

export default function TribeInfo({ contestant }: TribeInfoProps) {
  const switchedTribe = contestant.switchedTribe ?? contestant.originalTribe

  return (
    <div className="pf-layout">
      <img
        className="pf-photo"
        src={contestant.photo}
        alt={`${contestant.name} PF`}
      />
      <div className="pf-details">
        <p>
          Episode 1-2 tribe:{' '}
          <span className={`tribe-pill tribe-${contestant.originalTribe.toLowerCase()}`}>
            {contestant.originalTribe}
          </span>
        </p>
        <p>
          Episode 3 reshuffle tribe:{' '}
          <span className={`tribe-pill tribe-${switchedTribe.toLowerCase()}`}>
            {switchedTribe}
          </span>
        </p>
        <p>
          Episode 6 merge tribe:{' '}
          <span className="tribe-pill tribe-manulevu">Manulevu</span>
        </p>
        {contestant.advantage && (
          <p className="advantage-info">Advantage: {contestant.advantage}</p>
        )}
      </div>
    </div>
  )
}
