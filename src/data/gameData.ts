import type { EpisodeVoteMap } from '../types/survivor'
import survivor50Logo from '../assets/survivor-50-logo.png'

export const headerLogo = survivor50Logo

export const voteHistory: Record<string, EpisodeVoteMap> = {
  'Jenna Lewis-Dougherty': { 1: 'Cirie' },
  'Colby Donaldson': { 6: 'None' },
  'Stephenie LaGrossa Kendrick': { 3: 'Angelina', 4: 'Mike', 5: 'Angelina', 6: 'Kamilla' },
  'Cirie Fields': { 1: 'Jenna', 2: 'Savannah', 5: 'Charlie', 6: 'Colby' },
  'Ozzy Lusth': { 1: 'Jenna', 2: 'Savannah', 3: 'Q', 4: 'Angelina', 5: 'Angelina', 6: 'Exiled' },
  'Benjamin "Coach" Wade': { 6: 'Colby' },
  'Aubry Bracco': { 6: 'Genevieve' },
  'Chrissy Hofbeck': { 6: 'Kamilla' },
  'Christian Hubicki': { 1: 'Jenna', 2: 'Savannah', 3: 'Q', 4: 'Mike', 5: 'Angelina', 6: 'Genevieve' },
  'Angelina Keeley': { 3: 'Q', 4: 'Emily', 5: 'Stephenie' },
  'Mike White': { 3: 'Q', 4: 'Emily' },
  'Rick Devens': { 1: 'Jenna', 2: 'Savannah', 5: 'Rizo', 6: 'Genevieve' },
  'Jonathan Young': { 5: 'Rizo', 6: 'Kamilla' },
  'Emily Flippen': { 1: 'Jenna', 2: 'Savannah', 3: 'Q', 4: 'Mike', 5: 'Angelina', 6: 'Colby' },
  'Dee Valladares': { 5: 'Charlie', 6: 'Colby' },
  'Quintavius "Q" Burdette': { 3: 'None' },
  'Charlie Davis': { 5: 'Rizo' },
  'Tiffany Ervin': { 6: 'Chrissy' },
  'Genevieve Mushaluk': { 6: 'None' },
  'Kyle Fraser': {},
  'Joe Hunter': { 1: 'Jenna', 2: 'Savannah', 6: 'Genevieve' },
  'Kamilla Karthigesu': { 5: 'Charlie', 6: 'Chrissy' },
  'Savannah Louie': { 1: 'Jenna', 2: 'Ozzy' },
  'Rizo Velovic': { 5: 'Charlie', 6: 'Exiled' },
}

export const votedOff = new Set([
  'Jenna Lewis-Dougherty',
  'Kyle Fraser',
  'Savannah Louie',
  'Quintavius "Q" Burdette',
  'Mike White',
  'Angelina Keeley',
  'Charlie Davis',
  'Kamilla Karthigesu',
  'Genevieve Mushaluk',
  'Colby Donaldson',
])

export const trackedEpisodes = [1, 2, 3, 4, 5, 6]

export const eliminatedByEpisode: Record<string, number> = {
  'Jenna Lewis-Dougherty': 1,
  'Kyle Fraser': 1,
  'Savannah Louie': 2,
  'Quintavius "Q" Burdette': 3,
  'Mike White': 4,
  'Angelina Keeley': 5,
  'Charlie Davis': 5,
  'Kamilla Karthigesu': 6,
  'Genevieve Mushaluk': 6,
  'Colby Donaldson': 6,
}

export const episodeGroups: Record<number, string[][]> = {
  6: [
    ['Chrissy Hofbeck', 'Jonathan Young', 'Stephenie LaGrossa Kendrick', 'Tiffany Ervin', 'Kamilla Karthigesu'],
    ['Aubry Bracco', 'Christian Hubicki', 'Joe Hunter', 'Rick Devens', 'Genevieve Mushaluk'],
    ['Cirie Fields', 'Benjamin "Coach" Wade', 'Dee Valladares', 'Emily Flippen', 'Colby Donaldson'],
  ],
}

export const teamOrder = ['Hsu', 'Monica', 'Charlie', 'Fanny', 'Kelsey', 'Alex', 'Kelly', 'Audrey']
