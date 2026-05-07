import type { EpisodeVoteMap } from '../types/survivor'
import survivor50Logo from '../assets/survivor-50-logo.png'
import raw from './gameData.json'

export const headerLogo = survivor50Logo

const toNumericKeys = (obj: Record<string, string>): EpisodeVoteMap =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [Number(k), v]))

export const voteHistory: Record<string, EpisodeVoteMap> =
  Object.fromEntries(
    Object.entries(raw.voteHistory).map(([name, votes]) => [name, toNumericKeys(votes)]),
  )

export const votedOff = new Set(raw.votedOff)

export const trackedEpisodes: number[] = raw.trackedEpisodes

export const eliminatedByEpisode: Record<string, number> = raw.eliminatedByEpisode

export const episodeGroups: Record<number, string[][]> =
  Object.fromEntries(
    Object.entries(raw.episodeGroups).map(([k, v]) => [Number(k), v]),
  )

export const dualTribalEpisodes = new Set(raw.dualTribalEpisodes)

export const episodeLabels: Record<number, string> =
  Object.fromEntries(
    Object.entries(raw.episodeLabels).map(([k, v]) => [Number(k), v]),
  )

export const teamOrder: string[] = raw.teamOrder

export const immunityWins: Record<string, number[]> = raw.immunityWins ?? {}
