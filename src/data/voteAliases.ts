import aliases from './voteAliases.json'

export const voteNameAliases: Record<string, string> = aliases

export function toCanonicalName(vote: string | undefined): string {
  if (!vote) return ''
  return voteNameAliases[vote] ?? vote
}
