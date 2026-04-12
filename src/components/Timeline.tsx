import type { Contestant } from '../types/survivor'
import { timelineEpisodes } from '../data/timelineData'

type Props = {
  contestants: Contestant[]
}

export default function Timeline({ contestants }: Props) {
  const photoMap = new Map(contestants.map((c) => [c.name, c.photo]))

  return (
    <div className="timeline">
      {timelineEpisodes.map((ep) => (
        <div key={ep.episode} className="tl-episode">
          <div className="tl-dot" />
          <div className="tl-card">
            <div className="tl-header">
              <span className="tl-ep-num">Episode {ep.episode}</span>
              {ep.label && <span className="tl-label">{ep.label}</span>}
            </div>
            <h3 className="tl-title">"{ep.title}"</h3>
            <p className="tl-date">{ep.airDate} &middot; Days {ep.days}</p>

            <ul className="tl-events">
              {ep.events.map((event, i) => (
                <li key={i}>{event}</li>
              ))}
            </ul>

            <div className="tl-eliminations">
              {ep.eliminated.map((elim) => {
                const photo = photoMap.get(elim.name)
                return (
                  <div key={elim.name} className="tl-elim">
                    {photo && (
                      <img className="tl-elim-photo" src={photo} alt={elim.name} />
                    )}
                    <div className="tl-elim-info">
                      <span className="tl-elim-name">{elim.name}</span>
                      <span className="tl-elim-detail">
                        {elim.method} {elim.votes !== 'Medical' ? `(${elim.votes})` : ''}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
