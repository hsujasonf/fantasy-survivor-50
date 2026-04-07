export const voteNameAliases: Record<string, string> = {
  Jenna: 'Jenna Lewis-Dougherty',
  Kyle: 'Kyle Fraser',
  Savannah: 'Savannah Louie',
  Q: 'Quintavius "Q" Burdette',
  Mike: 'Mike White',
  Angelina: 'Angelina Keeley',
  Charlie: 'Charlie Davis',
  Cirie: 'Cirie Fields',
  Rizo: 'Rizo Velovic',
  Ozzy: 'Ozzy Lusth',
  Emily: 'Emily Flippen',
  Stephenie: 'Stephenie LaGrossa Kendrick',
  Kamilla: 'Kamilla Karthigesu',
  Genevieve: 'Genevieve Mushaluk',
  Colby: 'Colby Donaldson',
  Chrissy: 'Chrissy Hofbeck',
}

export function toCanonicalName(vote: string | undefined): string {
  if (!vote) return ''
  return voteNameAliases[vote] ?? vote
}
