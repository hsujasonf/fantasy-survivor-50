import type { Contestant, Tribe } from '../types/survivor'

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

export function buildEliminatedByEpisodeMap(
  eliminatedByEpisode: Record<string, number>,
): Record<number, string[]> {
  const map: Record<number, string[]> = {}
  for (const [name, episode] of Object.entries(eliminatedByEpisode)) {
    if (!map[episode]) map[episode] = []
    map[episode].push(name)
  }
  return map
}

export function getCorrectVoteTarget(
  episode: number,
  tribe: Tribe,
  playerName: string,
  eliminatedPlayersByEpisode: Record<number, string[]>,
  episodeGroups: Record<number, string[][]>,
  dualTribalEpisodes: Set<number>,
  contestants: Contestant[],
): string | undefined {
  const eliminated = (eliminatedPlayersByEpisode[episode] ?? [])
    .filter((n) => n !== 'Kyle Fraser')
  const groups = episodeGroups[episode]
  if (groups) {
    const group = groups.find((g) => g.includes(playerName))
    return eliminated.find((n) => group?.includes(n))
  }
  if (dualTribalEpisodes.has(episode)) {
    return eliminated.find((n) => {
      const c = contestants.find((ct) => ct.name === n)
      return c && getTribeForEpisode(c, episode) === tribe
    })
  }
  return eliminated[0]
}
