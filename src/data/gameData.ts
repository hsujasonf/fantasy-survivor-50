import type { EpisodeVoteMap } from '../types/survivor'
import survivor50Logo from '../assets/survivor-50-logo.png'

export const headerLogo = survivor50Logo

export const voteHistory: Record<string, EpisodeVoteMap> = {
  'Jenna Lewis-Dougherty': { 1: 'Cirie' },
  'Colby Donaldson': {},
  'Stephenie LaGrossa Kendrick': { 3: 'Angelina', 4: 'Mike', 5: 'Angelina' },
  'Cirie Fields': { 1: 'Jenna', 2: 'Savannah', 5: 'Charlie' },
  'Ozzy Lusth': { 1: 'Jenna', 2: 'Savannah', 3: 'Q', 4: 'Angelina', 5: 'Angelina' },
  'Benjamin "Coach" Wade': {},
  'Aubry Bracco': {},
  'Chrissy Hofbeck': {},
  'Christian Hubicki': { 1: 'Jenna', 2: 'Savannah', 3: 'Q', 4: 'Mike', 5: 'Angelina' },
  'Angelina Keeley': { 3: 'Q', 4: 'Emily', 5: 'Stephenie' },
  'Mike White': { 3: 'Q', 4: 'Emily' },
  'Rick Devens': { 1: 'Jenna', 2: 'Savannah', 5: 'Rizo' },
  'Jonathan Young': { 5: 'Rizo' },
  'Emily Flippen': { 1: 'Jenna', 2: 'Savannah', 3: 'Q', 4: 'Mike', 5: 'Angelina' },
  'Dee Valladares': { 5: 'Charlie' },
  'Quintavius "Q" Burdette': { 3: 'None' },
  'Charlie Davis': { 5: 'Rizo' },
  'Tiffany Ervin': {},
  'Genevieve Mushaluk': {},
  'Kyle Fraser': {},
  'Joe Hunter': { 1: 'Jenna', 2: 'Savannah' },
  'Kamilla Karthigesu': { 5: 'Charlie' },
  'Savannah Louie': { 1: 'Jenna', 2: 'Ozzy' },
  'Rizo Velovic': { 5: 'Charlie' },
}

export const votedOff = new Set([
  'Jenna Lewis-Dougherty',
  'Kyle Fraser',
  'Savannah Louie',
  'Quintavius "Q" Burdette',
  'Mike White',
  'Angelina Keeley',
  'Charlie Davis',
])

export const trackedEpisodes = [1, 2, 3, 4, 5]

export const eliminatedByEpisode: Record<string, number> = {
  'Jenna Lewis-Dougherty': 1,
  'Kyle Fraser': 1,
  'Savannah Louie': 2,
  'Quintavius "Q" Burdette': 3,
  'Mike White': 4,
  'Angelina Keeley': 5,
  'Charlie Davis': 5,
}

export const teamOrder = ['Hsu', 'Monica', 'Charlie', 'Fanny', 'Kelsey', 'Alex', 'Kelly', 'Audrey']
