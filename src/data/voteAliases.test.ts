import { describe, it, expect } from 'vitest'
import { voteNameAliases, toCanonicalName } from './voteAliases'

describe('voteNameAliases', () => {
  it('maps all first-name vote values to full contestant names', () => {
    expect(voteNameAliases['Jenna']).toBe('Jenna Lewis-Dougherty')
    expect(voteNameAliases['Q']).toBe('Quintavius "Q" Burdette')
    expect(voteNameAliases['Stephenie']).toBe('Stephenie LaGrossa Kendrick')
    expect(voteNameAliases['Kamilla']).toBe('Kamilla Karthigesu')
  })

  it('has an entry for every contestant who has been voted for', () => {
    const expectedAliases = [
      'Jenna', 'Kyle', 'Savannah', 'Q', 'Mike', 'Angelina',
      'Charlie', 'Cirie', 'Rizo', 'Ozzy', 'Emily', 'Stephenie',
      'Kamilla', 'Genevieve', 'Colby', 'Chrissy',
    ]
    for (const alias of expectedAliases) {
      expect(voteNameAliases).toHaveProperty(alias)
    }
  })
})

describe('toCanonicalName', () => {
  it('converts a first-name alias to full name', () => {
    expect(toCanonicalName('Jenna')).toBe('Jenna Lewis-Dougherty')
    expect(toCanonicalName('Q')).toBe('Quintavius "Q" Burdette')
  })

  it('returns the input unchanged if no alias exists', () => {
    expect(toCanonicalName('Cirie Fields')).toBe('Cirie Fields')
    expect(toCanonicalName('None')).toBe('None')
  })

  it('returns empty string for undefined input', () => {
    expect(toCanonicalName(undefined)).toBe('')
  })

  it('returns empty string for empty string input', () => {
    expect(toCanonicalName('')).toBe('')
  })
})
