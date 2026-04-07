export type Tribe = 'Cila' | 'Vatu' | 'Kalo' | 'Manulevu'

export type Contestant = {
  name: string
  draftedBy: string
  photo: string
  originalTribe: Tribe
  switchedTribe?: Tribe
  advantage?: string
  age: number
  hometown: string
  seasons: string[]
}

export type EpisodeVoteMap = Record<number, string>
