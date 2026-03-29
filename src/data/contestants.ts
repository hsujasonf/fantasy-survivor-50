import type { Contestant } from '../types/survivor'
import colbyPhoto from '../assets/colby-donaldson.png'
import jennaPhoto from '../assets/jenna-lewis.png'
import stepheniePhoto from '../assets/stephenie-lagrossa.png'
import ciriePhoto from '../assets/cirie-fields.png'
import ozzyPhoto from '../assets/ozzy-lusth.png'
import coachPhoto from '../assets/coach-wade.png'
import aubryPhoto from '../assets/aubry-bracco.png'
import chrissyPhoto from '../assets/chrissy-hofbeck.png'
import christianPhoto from '../assets/christian-hubicki.png'
import angelinaPhoto from '../assets/angelina-keeley.png'
import mikePhoto from '../assets/mike-white.png'
import rickPhoto from '../assets/rick-devens.png'
import jonathanPhoto from '../assets/jonathan-young.png'
import emilyPhoto from '../assets/emily-flippen.png'
import deePhoto from '../assets/dee-valladares.png'
import qPhoto from '../assets/q-burdette.png'
import charliePhoto from '../assets/charlie-davis.png'
import tiffanyPhoto from '../assets/tiffany-ervin.png'
import genevievePhoto from '../assets/genevieve-mushaluk.png'
import kylePhoto from '../assets/kyle-fraser.png'
import joePhoto from '../assets/joe-hunter.png'
import kamillaPhoto from '../assets/kamilla-karthigesu.png'
import savannahPhoto from '../assets/savannah-louie.png'
import rizoPhoto from '../assets/rizo-velovic.png'

export const contestants: Contestant[] = [
  { name: 'Jenna Lewis-Dougherty', draftedBy: 'Audrey', photo: jennaPhoto, originalTribe: 'Cila' },
  {
    name: 'Colby Donaldson',
    draftedBy: 'Monica',
    photo: colbyPhoto,
    originalTribe: 'Vatu',
    switchedTribe: 'Kalo',
    advantage: 'Lost Vote',
  },
  {
    name: 'Stephenie LaGrossa Kendrick',
    draftedBy: 'Monica',
    photo: stepheniePhoto,
    originalTribe: 'Vatu',
    switchedTribe: 'Vatu',
  },
  {
    name: 'Cirie Fields',
    draftedBy: 'Monica',
    photo: ciriePhoto,
    originalTribe: 'Cila',
    switchedTribe: 'Cila',
    advantage: 'Extra Vote',
  },
  {
    name: 'Ozzy Lusth',
    draftedBy: 'Kelsey',
    photo: ozzyPhoto,
    originalTribe: 'Cila',
    switchedTribe: 'Vatu',
    advantage: 'Boomerang Idol',
  },
  {
    name: 'Benjamin "Coach" Wade',
    draftedBy: 'Charlie',
    photo: coachPhoto,
    originalTribe: 'Kalo',
    switchedTribe: 'Kalo',
  },
  {
    name: 'Aubry Bracco',
    draftedBy: 'Audrey',
    photo: aubryPhoto,
    originalTribe: 'Vatu',
    switchedTribe: 'Kalo',
    advantage: 'Boomerang Idol',
  },
  {
    name: 'Chrissy Hofbeck',
    draftedBy: 'Alex',
    photo: chrissyPhoto,
    originalTribe: 'Kalo',
    switchedTribe: 'Kalo',
  },
  {
    name: 'Christian Hubicki',
    draftedBy: 'Kelly',
    photo: christianPhoto,
    originalTribe: 'Cila',
    switchedTribe: 'Vatu',
  },
  {
    name: 'Angelina Keeley',
    draftedBy: 'Fanny',
    photo: angelinaPhoto,
    originalTribe: 'Vatu',
    switchedTribe: 'Vatu',
  },
  {
    name: 'Mike White',
    draftedBy: 'Kelsey',
    photo: mikePhoto,
    originalTribe: 'Kalo',
    switchedTribe: 'Vatu',
  },
  {
    name: 'Rick Devens',
    draftedBy: 'Hsu',
    photo: rickPhoto,
    originalTribe: 'Cila',
    switchedTribe: 'Cila',
  },
  {
    name: 'Jonathan Young',
    draftedBy: 'Alex',
    photo: jonathanPhoto,
    originalTribe: 'Kalo',
    switchedTribe: 'Cila',
  },
  {
    name: 'Emily Flippen',
    draftedBy: 'Charlie',
    photo: emilyPhoto,
    originalTribe: 'Cila',
    switchedTribe: 'Vatu',
  },
  {
    name: 'Dee Valladares',
    draftedBy: 'Hsu',
    photo: deePhoto,
    originalTribe: 'Kalo',
    switchedTribe: 'Cila',
  },
  {
    name: 'Quintavius "Q" Burdette',
    draftedBy: 'Fanny',
    photo: qPhoto,
    originalTribe: 'Vatu',
    switchedTribe: 'Vatu',
  },
  {
    name: 'Charlie Davis',
    draftedBy: 'Charlie',
    photo: charliePhoto,
    originalTribe: 'Kalo',
    switchedTribe: 'Cila',
  },
  {
    name: 'Tiffany Ervin',
    draftedBy: 'Alex',
    photo: tiffanyPhoto,
    originalTribe: 'Kalo',
    switchedTribe: 'Kalo',
  },
  {
    name: 'Genevieve Mushaluk',
    draftedBy: 'Hsu',
    photo: genevievePhoto,
    originalTribe: 'Vatu',
    switchedTribe: 'Kalo',
  },
  {
    name: 'Kyle Fraser',
    draftedBy: 'Kelly',
    photo: kylePhoto,
    originalTribe: 'Vatu',
  },
  {
    name: 'Joe Hunter',
    draftedBy: 'Audrey',
    photo: joePhoto,
    originalTribe: 'Cila',
    switchedTribe: 'Kalo',
  },
  {
    name: 'Kamilla Karthigesu',
    draftedBy: 'Kelly',
    photo: kamillaPhoto,
    originalTribe: 'Kalo',
    switchedTribe: 'Cila',
  },
  {
    name: 'Savannah Louie',
    draftedBy: 'Kelsey',
    photo: savannahPhoto,
    originalTribe: 'Cila',
  },
  {
    name: 'Rizo Velovic',
    draftedBy: 'Fanny',
    photo: rizoPhoto,
    originalTribe: 'Vatu',
    switchedTribe: 'Cila',
    advantage: 'Boomerang Idol',
  },
]
