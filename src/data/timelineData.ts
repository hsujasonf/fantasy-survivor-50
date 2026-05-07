export type TimelineEpisode = {
  episode: number
  title: string
  airDate: string
  days: string
  events: string[]
  eliminated: {
    name: string
    method: string
    votes: string
  }[]
  label?: string
}

export const timelineEpisodes: TimelineEpisode[] = [
  {
    episode: 1,
    title: 'Epic Party',
    airDate: 'February 25, 2026',
    days: '1–4',
    events: [
      'Twenty-four returning castaways begin competition in Fiji',
      'Marooning challenge determines flint distribution; Vatu wins',
      'Ozzy and Q sent to Exile Island; they negotiate a vote/supply trade',
      'Kalo and Vatu win immunity; Cila loses flint',
      'Genevieve and Stephenie find the first Boomerang Idol and gift it to Ozzy',
      'Kyle Fraser medically evacuated on Day 4 with a suspected ruptured Achilles tendon',
    ],
    eliminated: [
      { name: 'Jenna Lewis-Dougherty', method: 'Voted Out', votes: '7-1' },
      { name: 'Kyle Fraser', method: 'Evacuated', votes: 'Medical' },
    ],
  },
  {
    episode: 2,
    title: 'Therapy Carousel',
    airDate: 'March 4, 2026',
    days: '4–6',
    events: [
      'Kalo and Cila win the reward challenge',
      'Christian finds the second Boomerang Idol and gifts it to Aubry',
      'Vatu and Kalo win immunity; Cila loses again',
      'Ozzy gives his extra vote to Cirie',
      'Rick plants a fake immunity idol at tribal council as a distraction',
    ],
    eliminated: [
      { name: 'Savannah Louie', method: 'Voted Out', votes: '6-1' },
    ],
  },
  {
    episode: 3,
    title: 'Did You Vote For a Swap?',
    airDate: 'March 11, 2026',
    days: '6–8',
    label: 'Tribe Swap',
    events: [
      'Three tribes reshuffled into new configurations',
      'New Cila: Charlie, Kamilla, Dee, Rizo, Jonathan, Rick, Cirie',
      'New Kalo: Aubry, Colby, Joe, Genevieve, Tiffany, Chrissy, Coach',
      'New Vatu: Emily, Christian, Ozzy, Mike, Q, Angelina, Stephenie',
      'Cila and Kalo win immunity',
    ],
    eliminated: [
      { name: 'Quintavius "Q" Burdette', method: 'Voted Out', votes: '5-1' },
    ],
  },
  {
    episode: 4,
    title: 'Knife to the Heart',
    airDate: 'March 18, 2026',
    days: '8–9',
    events: [
      'Genevieve finds the third Boomerang Idol and gifts it to Rizo',
      'Kalo wins both immunity and reward — a Zac Brown celebrity visit with concert and spearfished meal',
      'Cila also wins immunity',
    ],
    eliminated: [
      { name: 'Mike White', method: 'Voted Out', votes: '3-2-1' },
    ],
  },
  {
    episode: 5,
    title: 'Open Wounds',
    airDate: 'March 25, 2026',
    days: '9–11',
    label: 'Double Tribal',
    events: [
      'First double tribal council of the season — only one tribe earns immunity',
      'Kalo wins immunity; Vatu and Cila both attend tribal council',
      'Angelina voted out unanimously from Vatu',
      'At Cila, a 4-3 split sends Charlie home over Rizo',
    ],
    eliminated: [
      { name: 'Angelina Keeley', method: 'Voted Out', votes: '4-1' },
      { name: 'Charlie Davis', method: 'Voted Out', votes: '4-3' },
    ],
  },
  {
    episode: 6,
    title: 'The Blood Moon',
    airDate: 'April 1, 2026',
    days: '11–13',
    label: 'Merge',
    events: [
      'Three tribes merge on Day 12 with a mad dash for advantages',
      'Ozzy finds an advantage and sends Rizo to Exile Island',
      'Historic triple tribal council — players split into three groups of five',
      'Stephenie, Christian, and Dee each win individual immunity for their group',
      "Genevieve's Shot in the Dark comes back Not Safe",
    ],
    eliminated: [
      { name: 'Kamilla Karthigesu', method: 'Voted Out', votes: '3-2' },
      { name: 'Genevieve Mushaluk', method: 'Voted Out', votes: '4-0' },
      { name: 'Colby Donaldson', method: 'Voted Out', votes: '4-0' },
    ],
  },
  {
    episode: 7,
    title: "That's Not How I Play Survivor",
    airDate: 'April 8, 2026',
    days: '13–15',
    events: [
      'Jonathan and Dee argue at camp; Coach vows revenge on Dee',
      'Stephenie wins an endurance journey challenge and earns a steal-a-vote advantage, which she shares with Cirie',
      'Ozzy wins individual immunity in a beam balance challenge',
      'Rizo learns Dee told Emily about his idol',
      'Aubry plays her Boomerang Idol defensively; Dee plays Shot in the Dark (Not Safe)',
    ],
    eliminated: [
      { name: 'Dee Valladares', method: 'Voted Out', votes: '8-4-1' },
    ],
  },
  {
    episode: 8,
    title: 'Double The Fun, Double The Demise',
    airDate: 'April 15, 2026',
    days: '15–16',
    label: 'Pair Vote',
    events: [
      'Castaways divided into pairs: Coach & Chrissy, Rizo & Emily, Christian & Jonathan, Joe & Tiffany, Aubry & Rick, Ozzy & Stephenie',
      'Cirie left without a partner and sent to Exile Island',
      'Joe & Tiffany win the pair immunity challenge plus a spaghetti and wine reward',
      'Cirie wins an Exile challenge to return and vote at tribal council',
      'One pair to be voted out together — a Survivor first',
      "Coach plays Shot in the Dark (Not Safe)",
    ],
    eliminated: [
      { name: 'Coach Wade', method: 'Voted Out (Pair)', votes: '10-1-1' },
      { name: 'Chrissy Hofbeck', method: 'Voted Out (Pair)', votes: '10-1-1' },
    ],
  },
  {
    episode: 9,
    title: 'I Deserve All Of This',
    airDate: 'April 22, 2026',
    days: '16–18',
    events: [
      'Rick is criticized at camp for his fake idol theatrics from the prior tribal',
      'Christian tries to reconcile with Jonathan, Joe, and Stephenie, but trust is gone',
      'Christian pitches Cirie on targeting Ozzy; Cirie flips and rallies votes against Christian instead',
      'Bucket-hold immunity challenge: Joe wins individual immunity',
      'Four volunteers (Jonathan, Joe, Ozzy, Tiffany) outlast Jeff Probst to win a large bag of rice for the tribe',
      'Joe sends Christian on a journey via rock-paper-scissors',
      'Christian plays Shot in the Dark as a trust gesture, offering it to Jonathan',
    ],
    eliminated: [
      { name: 'Christian Hubicki', method: 'Voted Out', votes: '6-3-2' },
    ],
  },
  {
    episode: 10,
    title: 'A Side Dish of Chaos',
    airDate: 'April 29, 2026',
    days: '18–19',
    events: [
      'Rick reveals his fake idol to camp; Joe and Ozzy still target him',
      'The Survivor Auction returns with themed item categories and mystery offerings',
      'Tiffany wins individual immunity',
      "MrBeast appears at tribal council with the 'Super Beware Advantage' briefcase",
      'Twist: a coin flip — heads = a real idol + $2M prize pool, tails = instant elimination',
      'Rick volunteers, calls heads, and wins a real idol which he plays for safety',
      "Stephenie plays her steal-a-vote on Rick, but Rick's idol negates the votes against him",
    ],
    eliminated: [
      { name: 'Stephenie LaGrossa Kendrick', method: 'Voted Out', votes: '8-2' },
    ],
  },
  {
    episode: 11,
    title: 'Everyone Will Be Shooketh!',
    airDate: 'May 6, 2026',
    days: '19–21',
    label: 'Split Tribal',
    events: [
      'Floating A-frame balance immunity challenge with progressively narrower footholds',
      'Jonathan wins individual immunity and earns a reward to attend BOTH tribal councils',
      'Players split into two groups of four for separate tribal councils',
      'Group 1 (Cirie, Emily, Rick, Tiffany): tied 2-2 between Emily and Cirie, forcing a revote',
      "Cirie uses her extra vote in the revote; Emily falls 4-2",
      'Group 2 (Aubry, Joe, Ozzy, Rizo + Jonathan): Rizo flips on Ozzy after learning about his alliance with Cirie',
      'Ozzy is blindsided 4-1 with an idol still in his pocket',
    ],
    eliminated: [
      { name: 'Emily Flippen', method: 'Voted Out', votes: '4-2' },
      { name: 'Ozzy Lusth', method: 'Voted Out', votes: '4-1' },
    ],
  },
]
