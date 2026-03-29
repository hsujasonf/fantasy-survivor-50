export type Tribe = 'Cila' | 'Vatu' | 'Kalo'

export type Contestant = {
  name: string
  draftedBy: string
  photo: string
  originalTribe: Tribe
  switchedTribe?: Tribe
}

export type EpisodeVoteMap = Record<number, string>
