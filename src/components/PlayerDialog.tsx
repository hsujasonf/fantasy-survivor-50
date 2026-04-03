import type { Contestant, EpisodeVoteMap } from '../types/survivor'
import { episodeGroups } from '../data/gameData'
import {
  getPlayerStatusLabel,
  getTribeForEpisode,
  getVisibleEpisodes,
  isActiveInEpisode,
} from '../utils/survivor'

type PlayerDialogProps = {
  selectedContestant: Contestant
  contestants: Contestant[]
  voteHistory: Record<string, EpisodeVoteMap>
  trackedEpisodes: number[]
  eliminatedByEpisode: Record<string, number>
  onClose: () => void
}

export default function PlayerDialog({
  selectedContestant,
  contestants,
  voteHistory,
  trackedEpisodes,
  eliminatedByEpisode,
  onClose,
}: PlayerDialogProps) {
  const selectedVotes = voteHistory[selectedContestant.name] ?? {}
  const visibleEpisodes = getVisibleEpisodes(
    selectedContestant.name,
    trackedEpisodes,
    eliminatedByEpisode,
  )
  const statusLabel = getPlayerStatusLabel(selectedContestant.name, eliminatedByEpisode)
  const dualTribalEpisodes = new Set([5])
  const eliminatedPlayersByEpisode: Record<number, string[]> = {}
  for (const [name, episode] of Object.entries(eliminatedByEpisode)) {
    if (!eliminatedPlayersByEpisode[episode]) eliminatedPlayersByEpisode[episode] = []
    eliminatedPlayersByEpisode[episode].push(name)
  }
  const voteNameAliases: Record<string, string> = {
    Jenna: 'Jenna Lewis-Dougherty',
    Kyle: 'Kyle Fraser',
    Savannah: 'Savannah Louie',
    Q: 'Quintavius "Q" Burdette',
    Mike: 'Mike White',
    Angelina: 'Angelina Keeley',
    Charlie: 'Charlie Davis',
    Cirie: 'Cirie Fields',
    Rizo: 'Rizo Velovic',
    Ozzy: 'Ozzy Lusth',
    Emily: 'Emily Flippen',
    Stephenie: 'Stephenie LaGrossa Kendrick',
    Kamilla: 'Kamilla Karthigesu',
    Genevieve: 'Genevieve Mushaluk',
    Colby: 'Colby Donaldson',
    Chrissy: 'Chrissy Hofbeck',
  }

  const toCanonicalName = (vote: string | undefined) => {
    if (!vote) return ''
    return voteNameAliases[vote] ?? vote
  }

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <section
        className="player-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={`${selectedContestant.name} voting details`}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="dialog-close" onClick={onClose} aria-label="Close details">
          x
        </button>
        <h2>
          {selectedContestant.name}
          {statusLabel ? <span className="player-status"> - {statusLabel}</span> : null}
        </h2>

        <div className="dialog-block">
          <div className="pf-layout">
            <img
              className="pf-photo"
              src={selectedContestant.photo}
              alt={`${selectedContestant.name} PF`}
            />
            <div className="pf-details">
              <p>
                Episode 1-2 tribe:{' '}
                <span className={`tribe-pill tribe-${selectedContestant.originalTribe.toLowerCase()}`}>
                  {selectedContestant.originalTribe}
                </span>
              </p>
              <p>
                Episode 3 reshuffle tribe:{' '}
                <span
                  className={`tribe-pill tribe-${(selectedContestant.switchedTribe ?? selectedContestant.originalTribe).toLowerCase()}`}
                >
                  {selectedContestant.switchedTribe ?? selectedContestant.originalTribe}
                </span>
              </p>
              <p>
                Episode 6 merge tribe:{' '}
                <span className="tribe-pill tribe-manulevu">Manulevu</span>
              </p>
              {selectedContestant.advantage && (
                <p className="advantage-info">Advantage: {selectedContestant.advantage}</p>
              )}
            </div>
          </div>
        </div>

        <div className="dialog-block">
          <div className="vote-table-wrap">
            <table className="vote-table">
              <thead>
                <tr>
                  <th>Episode</th>
                  <th>Voted For</th>
                  <th className="correct-vote-header">Correct Vote</th>
                  <th>Tribe</th>
                  <th>Voted With</th>
                  <th>Didn&apos;t Vote With</th>
                </tr>
              </thead>
              <tbody>
                {visibleEpisodes.map((episode) => {
                  const tribe = getTribeForEpisode(selectedContestant, episode)
                  const vote = selectedVotes[episode]
                  const isExiled = vote === 'Exiled'

                  const tribeMates = contestants.filter(
                    (c) =>
                      c.name !== selectedContestant.name &&
                      getTribeForEpisode(c, episode) === tribe &&
                      isActiveInEpisode(c.name, episode, eliminatedByEpisode),
                  )
                  const activePlayers = contestants.filter(
                    (c) =>
                      c.name !== selectedContestant.name &&
                      isActiveInEpisode(c.name, episode, eliminatedByEpisode),
                  )

                  const groups = episodeGroups[episode]
                  const playerGroup = groups?.find((g) => g.includes(selectedContestant.name))
                  const groupMembers = playerGroup
                    ? contestants.filter(
                        (c) => c.name !== selectedContestant.name && playerGroup.includes(c.name),
                      )
                    : []

                  let comparisonPool: Contestant[]
                  let differencePool: Contestant[]
                  if (groups) {
                    comparisonPool = groupMembers
                    differencePool = groupMembers
                  } else if (dualTribalEpisodes.has(episode)) {
                    comparisonPool = tribeMates
                    differencePool = tribeMates
                  } else {
                    comparisonPool = activePlayers
                    differencePool = tribeMates
                  }

                  let votedWith = 'No tribal'
                  let didNotVoteWith = 'No tribal'

                  if (isExiled) {
                    votedWith = ''
                    didNotVoteWith = ''
                  } else if (vote) {
                    const matchedVotes = comparisonPool
                      .filter((c) => {
                        const v = voteHistory[c.name]?.[episode]
                        return v && v !== 'Exiled' && v === vote
                      })
                      .map((c) => c.name)
                    const differentVotes = differencePool
                      .filter((c) => {
                        const v = voteHistory[c.name]?.[episode]
                        return v && v !== 'Exiled' && v !== vote
                      })
                      .map((c) => c.name)

                    votedWith = matchedVotes.length > 0 ? matchedVotes.join(', ') : 'None'
                    didNotVoteWith = differentVotes.length > 0 ? differentVotes.join(', ') : 'None'
                  }

                  let episodeLabel = String(episode)
                  if (episode === 3) episodeLabel += ' (reshuffle)'
                  if (episode === 6) episodeLabel += ' (merge)'

                  return (
                    <tr key={episode}>
                      <td>{episodeLabel}</td>
                      <td>{vote ?? 'No tribal'}</td>
                      <td className="correct-vote-cell">
                        {vote && !isExiled ? (() => {
                          const eliminated = (eliminatedPlayersByEpisode[episode] ?? [])
                            .filter((n) => n !== 'Kyle Fraser')
                          let target: string | undefined
                          if (groups) {
                            target = eliminated.find((n) => playerGroup?.includes(n))
                          } else if (dualTribalEpisodes.has(episode)) {
                            target = eliminated.find((n) => {
                              const c = contestants.find((ct) => ct.name === n)
                              return c && getTribeForEpisode(c, episode) === tribe
                            })
                          } else {
                            target = eliminated[0]
                          }
                          return toCanonicalName(vote) === target ? (
                            <span className="correct-vote yes" aria-label="Correct vote">
                              ✅
                            </span>
                          ) : (
                            <span className="correct-vote no" aria-label="Incorrect vote">
                              ❌
                            </span>
                          )
                        })() : (
                          ''
                        )}
                      </td>
                      <td>
                        <span className={`tribe-pill tribe-${tribe.toLowerCase()}`}>{tribe}</span>
                      </td>
                      <td>{votedWith}</td>
                      <td>{didNotVoteWith}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
