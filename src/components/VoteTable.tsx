import type { Contestant, EpisodeVoteMap } from '../types/survivor'
import { episodeGroups, dualTribalEpisodes, episodeLabels } from '../data/gameData'
import { toCanonicalName } from '../data/voteAliases'
import {
  getTribeForEpisode,
  isActiveInEpisode,
  buildEliminatedByEpisodeMap,
  getCorrectVoteTarget,
} from '../utils/survivor'

type VoteTableProps = {
  contestant: Contestant
  contestants: Contestant[]
  voteHistory: Record<string, EpisodeVoteMap>
  visibleEpisodes: number[]
  eliminatedByEpisode: Record<string, number>
}

export default function VoteTable({
  contestant,
  contestants,
  voteHistory,
  visibleEpisodes,
  eliminatedByEpisode,
}: VoteTableProps) {
  const selectedVotes = voteHistory[contestant.name] ?? {}
  const eliminatedPlayersByEpisode = buildEliminatedByEpisodeMap(eliminatedByEpisode)

  return (
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
            const tribe = getTribeForEpisode(contestant, episode)
            const vote = selectedVotes[episode]
            const isExiled = vote === 'Exiled'

            const tribeMates = contestants.filter(
              (c) =>
                c.name !== contestant.name &&
                getTribeForEpisode(c, episode) === tribe &&
                isActiveInEpisode(c.name, episode, eliminatedByEpisode),
            )
            const activePlayers = contestants.filter(
              (c) =>
                c.name !== contestant.name &&
                isActiveInEpisode(c.name, episode, eliminatedByEpisode),
            )

            const groups = episodeGroups[episode]
            const playerGroup = groups?.find((g) => g.includes(contestant.name))
            const groupMembers = playerGroup
              ? contestants.filter(
                  (c) => c.name !== contestant.name && playerGroup.includes(c.name),
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

            const label = episodeLabels[episode] ?? String(episode)

            const correctVoteTarget = vote && !isExiled
              ? getCorrectVoteTarget(
                  episode, tribe, contestant.name,
                  eliminatedPlayersByEpisode, episodeGroups, dualTribalEpisodes, contestants,
                )
              : undefined

            return (
              <tr key={episode}>
                <td>{label}</td>
                <td>{vote ?? 'No tribal'}</td>
                <td className="correct-vote-cell">
                  {vote && !isExiled ? (
                    toCanonicalName(vote) === correctVoteTarget ? (
                      <span className="correct-vote yes" aria-label="Correct vote">✅</span>
                    ) : (
                      <span className="correct-vote no" aria-label="Incorrect vote">❌</span>
                    )
                  ) : ''}
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
  )
}
