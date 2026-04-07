import type { Contestant, EpisodeVoteMap } from '../types/survivor'
import { getPlayerStatusLabel, getVisibleEpisodes } from '../utils/survivor'
import TribeInfo from './TribeInfo'
import VoteTable from './VoteTable'

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
  const statusLabel = getPlayerStatusLabel(selectedContestant.name, eliminatedByEpisode)
  const visibleEpisodes = getVisibleEpisodes(
    selectedContestant.name,
    trackedEpisodes,
    eliminatedByEpisode,
  )

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
        <div className="dialog-block">
          <TribeInfo contestant={selectedContestant} statusLabel={statusLabel} />
        </div>

        <div className="dialog-block">
          <VoteTable
            contestant={selectedContestant}
            contestants={contestants}
            voteHistory={voteHistory}
            visibleEpisodes={visibleEpisodes}
            eliminatedByEpisode={eliminatedByEpisode}
          />
        </div>
      </section>
    </div>
  )
}
