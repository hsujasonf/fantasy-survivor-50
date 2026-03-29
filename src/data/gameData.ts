import type { EpisodeVoteMap } from '../types/survivor'
import survivor50Logo from '../assets/survivor-50-logo.png'

export const headerLogo = survivor50Logo

export const voteHistory: Record<string, EpisodeVoteMap> = {
  'Jenna Lewis-Dougherty': { 1: 'Cirie' },
  'Colby Donaldson': {},
  'Stephenie LaGrossa Kendrick': { 4: 'Angelina', 5: 'Mike', 6: 'Angelina' },
  'Cirie Fields': { 1: 'Jenna', 3: 'Savannah', 7: 'Charlie' },
  'Ozzy Lusth': { 1: 'Jenna', 3: 'Savannah', 4: 'Q', 5: 'Angelina', 6: 'Angelina' },
  'Benjamin "Coach" Wade': {},
  'Aubry Bracco': {},
  'Chrissy Hofbeck': {},
  'Christian Hubicki': { 1: 'Jenna', 3: 'Savannah', 4: 'Q', 5: 'Mike', 6: 'Angelina' },
  'Angelina Keeley': { 4: 'Q', 5: 'Emily', 6: 'Stephenie' },
  'Mike White': { 4: 'Q', 5: 'Emily' },
  'Rick Devens': { 1: 'Jenna', 3: 'Savannah', 7: 'Rizo' },
  'Jonathan Young': { 7: 'Rizo' },
  'Emily Flippen': { 1: 'Jenna', 3: 'Savannah', 4: 'Q', 5: 'Mike', 6: 'Angelina' },
  'Dee Valladares': { 7: 'Charlie' },
  'Quintavius "Q" Burdette': { 4: 'None' },
  'Charlie Davis': { 7: 'Rizo' },
  'Tiffany Ervin': {},
  'Genevieve Mushaluk': {},
  'Kyle Fraser': { 2: 'Evacuated' },
  'Joe Hunter': { 1: 'Jenna', 3: 'Savannah' },
  'Kamilla Karthigesu': { 7: 'Charlie' },
  'Savannah Louie': { 1: 'Jenna', 3: 'Ozzy' },
  'Rizo Velovic': { 7: 'Charlie' },
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

export const trackedEpisodes = [1, 2, 3, 4, 5, 6, 7]

export const eliminatedByEpisode: Record<string, number> = {
  'Jenna Lewis-Dougherty': 1,
  'Kyle Fraser': 2,
  'Savannah Louie': 3,
  'Quintavius "Q" Burdette': 4,
  'Mike White': 5,
  'Angelina Keeley': 6,
  'Charlie Davis': 7,
}

export const teamOrder = ['Hsu', 'Monica', 'Charlie', 'Fanny', 'Kelsey', 'Alex', 'Kelly', 'Audrey']
