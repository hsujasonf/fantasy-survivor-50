import { describe, it, expect } from 'vitest'
import type { Contestant } from '../types/survivor'
import {
  getTribeForEpisode,
  isActiveInEpisode,
  getPlayerStatusLabel,
  getVisibleEpisodes,
  buildEliminatedByEpisodeMap,
  getCorrectVoteTarget,
} from './survivor'

const makeContestant = (
  overrides: Partial<Contestant> & { name: string },
): Contestant => ({
  draftedBy: 'Test',
  photo: '',
  originalTribe: 'Cila',
  ...overrides,
})

describe('getTribeForEpisode', () => {
  const cirie = makeContestant({
    name: 'Cirie Fields',
    originalTribe: 'Cila',
    switchedTribe: 'Cila',
  })
  const dee = makeContestant({
    name: 'Dee Valladares',
    originalTribe: 'Kalo',
    switchedTribe: 'Cila',
  })
  const kyle = makeContestant({
    name: 'Kyle Fraser',
    originalTribe: 'Vatu',
  })

  it('returns original tribe for episodes 1–2', () => {
    expect(getTribeForEpisode(dee, 1)).toBe('Kalo')
    expect(getTribeForEpisode(dee, 2)).toBe('Kalo')
  })

  it('returns switched tribe for episodes 3–5', () => {
    expect(getTribeForEpisode(dee, 3)).toBe('Cila')
    expect(getTribeForEpisode(dee, 5)).toBe('Cila')
  })

  it('falls back to original tribe when no switchedTribe', () => {
    expect(getTribeForEpisode(kyle, 3)).toBe('Vatu')
  })

  it('returns Manulevu for episode 6+', () => {
    expect(getTribeForEpisode(cirie, 6)).toBe('Manulevu')
    expect(getTribeForEpisode(dee, 7)).toBe('Manulevu')
  })
})

describe('isActiveInEpisode', () => {
  const eliminated: Record<string, number> = {
    'Savannah Louie': 2,
    'Mike White': 4,
  }

  it('returns true for a player not in the eliminated map', () => {
    expect(isActiveInEpisode('Cirie Fields', 6, eliminated)).toBe(true)
  })

  it('returns true for episodes up to and including elimination', () => {
    expect(isActiveInEpisode('Savannah Louie', 1, eliminated)).toBe(true)
    expect(isActiveInEpisode('Savannah Louie', 2, eliminated)).toBe(true)
  })

  it('returns false for episodes after elimination', () => {
    expect(isActiveInEpisode('Savannah Louie', 3, eliminated)).toBe(false)
    expect(isActiveInEpisode('Mike White', 5, eliminated)).toBe(false)
  })
})

describe('getPlayerStatusLabel', () => {
  const eliminated: Record<string, number> = {
    'Jenna Lewis-Dougherty': 1,
    'Kyle Fraser': 1,
    'Charlie Davis': 5,
  }

  it('returns null for active players', () => {
    expect(getPlayerStatusLabel('Cirie Fields', eliminated)).toBeNull()
  })

  it('returns voted out label with episode number', () => {
    expect(getPlayerStatusLabel('Charlie Davis', eliminated)).toBe('Voted out (Episode 5)')
    expect(getPlayerStatusLabel('Jenna Lewis-Dougherty', eliminated)).toBe('Voted out (Episode 1)')
  })

  it('returns evacuated label for Kyle Fraser', () => {
    expect(getPlayerStatusLabel('Kyle Fraser', eliminated)).toBe('Evacuated (Episode 1)')
  })
})

describe('getVisibleEpisodes', () => {
  const tracked = [1, 2, 3, 4, 5, 6]
  const eliminated: Record<string, number> = {
    'Savannah Louie': 2,
    'Angelina Keeley': 5,
  }

  it('returns all episodes for active players', () => {
    expect(getVisibleEpisodes('Cirie Fields', tracked, eliminated)).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('returns episodes up to elimination for voted-out players', () => {
    expect(getVisibleEpisodes('Savannah Louie', tracked, eliminated)).toEqual([1, 2])
    expect(getVisibleEpisodes('Angelina Keeley', tracked, eliminated)).toEqual([1, 2, 3, 4, 5])
  })
})

describe('buildEliminatedByEpisodeMap', () => {
  it('groups eliminated players by episode', () => {
    const eliminated = {
      'Jenna Lewis-Dougherty': 1,
      'Kyle Fraser': 1,
      'Charlie Davis': 5,
      'Angelina Keeley': 5,
    }
    const map = buildEliminatedByEpisodeMap(eliminated)
    expect(map[1]).toEqual(['Jenna Lewis-Dougherty', 'Kyle Fraser'])
    expect(map[5]).toEqual(['Charlie Davis', 'Angelina Keeley'])
    expect(map[3]).toBeUndefined()
  })

  it('returns empty object for empty input', () => {
    expect(buildEliminatedByEpisodeMap({})).toEqual({})
  })
})

describe('getCorrectVoteTarget', () => {
  const contestants: Contestant[] = [
    makeContestant({ name: 'Angelina Keeley', originalTribe: 'Vatu', switchedTribe: 'Vatu' }),
    makeContestant({ name: 'Charlie Davis', originalTribe: 'Kalo', switchedTribe: 'Cila' }),
    makeContestant({ name: 'Kamilla Karthigesu', originalTribe: 'Kalo', switchedTribe: 'Cila' }),
    makeContestant({ name: 'Colby Donaldson', originalTribe: 'Vatu', switchedTribe: 'Kalo' }),
    makeContestant({ name: 'Genevieve Mushaluk', originalTribe: 'Vatu', switchedTribe: 'Kalo' }),
  ]

  it('returns the single eliminated player for a normal episode', () => {
    const elimMap = { 2: ['Savannah Louie'] }
    const target = getCorrectVoteTarget(2, 'Cila', 'Cirie Fields', elimMap, {}, new Set(), contestants)
    expect(target).toBe('Savannah Louie')
  })

  it('excludes Kyle Fraser from elimination targets', () => {
    const elimMap = { 1: ['Jenna Lewis-Dougherty', 'Kyle Fraser'] }
    const target = getCorrectVoteTarget(1, 'Cila', 'Cirie Fields', elimMap, {}, new Set(), contestants)
    expect(target).toBe('Jenna Lewis-Dougherty')
  })

  it('returns tribe-matched target for dual tribal episodes', () => {
    const elimMap = { 5: ['Angelina Keeley', 'Charlie Davis'] }
    const dualSet = new Set([5])

    const vatuTarget = getCorrectVoteTarget(5, 'Vatu', 'Stephenie LaGrossa Kendrick', elimMap, {}, dualSet, contestants)
    expect(vatuTarget).toBe('Angelina Keeley')

    const cilaTarget = getCorrectVoteTarget(5, 'Cila', 'Cirie Fields', elimMap, {}, dualSet, contestants)
    expect(cilaTarget).toBe('Charlie Davis')
  })

  it('returns group-matched target for grouped episodes', () => {
    const elimMap = { 6: ['Kamilla Karthigesu', 'Genevieve Mushaluk', 'Colby Donaldson'] }
    const groups: Record<number, string[][]> = {
      6: [
        ['Chrissy Hofbeck', 'Kamilla Karthigesu'],
        ['Rick Devens', 'Genevieve Mushaluk'],
        ['Emily Flippen', 'Colby Donaldson'],
      ],
    }

    expect(getCorrectVoteTarget(6, 'Manulevu', 'Chrissy Hofbeck', elimMap, groups, new Set(), contestants))
      .toBe('Kamilla Karthigesu')
    expect(getCorrectVoteTarget(6, 'Manulevu', 'Rick Devens', elimMap, groups, new Set(), contestants))
      .toBe('Genevieve Mushaluk')
    expect(getCorrectVoteTarget(6, 'Manulevu', 'Emily Flippen', elimMap, groups, new Set(), contestants))
      .toBe('Colby Donaldson')
  })

  it('returns undefined when no eliminated players exist', () => {
    const target = getCorrectVoteTarget(4, 'Kalo', 'Someone', {}, {}, new Set(), contestants)
    expect(target).toBeUndefined()
  })
})
