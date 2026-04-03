import type { Contestant } from '../types/survivor'

export function getTribeForEpisode(contestant: Contestant, episode: number) {
  if (episode >= 6) {
    return 'Manulevu' as const
  }
  if (episode >= 3) {
    return contestant.switchedTribe ?? contestant.originalTribe
  }
  return contestant.originalTribe
}

export function isActiveInEpisode(
  contestantName: string,
  episode: number,
  eliminatedByEpisode: Record<string, number>,
) {
  const eliminatedEpisode = eliminatedByEpisode[contestantName]
  return !eliminatedEpisode || episode <= eliminatedEpisode
}

export function getPlayerStatusLabel(
  contestantName: string,
  eliminatedByEpisode: Record<string, number>,
) {
  const eliminatedEpisode = eliminatedByEpisode[contestantName]
  if (!eliminatedEpisode) {
    return null
  }

  if (contestantName === 'Kyle Fraser') {
    return `Evacuated (Episode ${eliminatedEpisode})`
  }

  return `Voted out (Episode ${eliminatedEpisode})`
}

export function getVisibleEpisodes(
  contestantName: string,
  trackedEpisodes: number[],
  eliminatedByEpisode: Record<string, number>,
) {
  const eliminatedEpisode = eliminatedByEpisode[contestantName]
  return trackedEpisodes.filter((episode) => !eliminatedEpisode || episode <= eliminatedEpisode)
}
