import type { Contestant, EpisodeVoteMap } from '../types/survivor'
import { episodeGroups, dualTribalEpisodes, episodeLabels, immunityWins } from '../data/gameData'
import { toCanonicalName } from '../data/voteAliases'
import {
  getTribeForEpisode,
  buildEliminatedByEpisodeMap,
  getCorrectVoteTarget,
} from '../utils/survivor'

type Props = {
  contestant: Contestant
  contestants: Contestant[]
  voteHistory: Record<string, EpisodeVoteMap>
  visibleEpisodes: number[]
  eliminatedByEpisode: Record<string, number>
}

export default function PlayerStats({
  contestant,
  contestants,
  voteHistory,
  visibleEpisodes,
  eliminatedByEpisode,
}: Props) {
  const selectedVotes = voteHistory[contestant.name] ?? {}
  const eliminatedPlayersByEpisode = buildEliminatedByEpisodeMap(eliminatedByEpisode)

  let correctCount = 0
  let totalVotes = 0
  const voteResults: { episode: number; vote: string; correct: boolean }[] = []

  for (const episode of visibleEpisodes) {
    const vote = selectedVotes[episode]
    if (!vote || vote === 'Exiled' || vote === 'None') continue

    const tribe = getTribeForEpisode(contestant, episode)
    const correctTarget = getCorrectVoteTarget(
      episode,
      tribe,
      contestant.name,
      eliminatedPlayersByEpisode,
      episodeGroups,
      dualTribalEpisodes,
      contestants,
    )

    const isCorrect = toCanonicalName(vote) === correctTarget
    if (isCorrect) correctCount++
    totalVotes++
    voteResults.push({ episode, vote, correct: isCorrect })
  }

  const wins = immunityWins[contestant.name] ?? []
  const accuracy = totalVotes > 0 ? Math.round((correctCount / totalVotes) * 100) : 0

  const epLabel = (ep: number) => episodeLabels[ep] ?? String(ep)

  return (
    <div className="player-stats">
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-value">{wins.length}</div>
          <div className="stat-label">Immunity Wins</div>
          {wins.length > 0 && (
            <div className="stat-detail">
              Episode{wins.length > 1 ? 's' : ''} {wins.map(epLabel).join(', ')}
            </div>
          )}
        </div>

        <div className="stat-card">
          <div className="stat-value">
            {correctCount}<span className="stat-fraction">/{totalVotes}</span>
          </div>
          <div className="stat-label">Correct Votes</div>
          {totalVotes > 0 && <div className="stat-detail">{accuracy}% accuracy</div>}
        </div>
      </div>

      {voteResults.length > 0 && (
        <div className="vote-breakdown">
          <h4 className="stat-section-title">Vote Breakdown</h4>
          <ul className="vote-breakdown-list">
            {voteResults.map(({ episode, vote, correct }) => (
              <li key={episode} className={correct ? 'is-correct' : 'is-incorrect'}>
                <span className="vb-ep">Ep {epLabel(episode)}</span>
                <span className="vb-vote">{vote}</span>
                <span className="vb-mark">{correct ? '✅' : '❌'}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
