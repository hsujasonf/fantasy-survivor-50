import type { Contestant, Tribe } from '../types/survivor'
import rawContestants from './contestants.json'

import colbyDonaldson from '../assets/colby-donaldson.png'
import jennaLewis from '../assets/jenna-lewis.png'
import stephenieLagrossa from '../assets/stephenie-lagrossa.png'
import cirieFields from '../assets/cirie-fields.png'
import ozzyLusth from '../assets/ozzy-lusth.png'
import coachWade from '../assets/coach-wade.png'
import aubryBracco from '../assets/aubry-bracco.png'
import chrissyHofbeck from '../assets/chrissy-hofbeck.png'
import christianHubicki from '../assets/christian-hubicki.png'
import angelinaKeeley from '../assets/angelina-keeley.png'
import mikeWhite from '../assets/mike-white.png'
import rickDevens from '../assets/rick-devens.png'
import jonathanYoung from '../assets/jonathan-young.png'
import emilyFlippen from '../assets/emily-flippen.png'
import deeValladares from '../assets/dee-valladares.png'
import qBurdette from '../assets/q-burdette.png'
import charlieDavis from '../assets/charlie-davis.png'
import tiffanyErvin from '../assets/tiffany-ervin.png'
import genevieveMushaluk from '../assets/genevieve-mushaluk.png'
import kyleFraser from '../assets/kyle-fraser.png'
import joeHunter from '../assets/joe-hunter.png'
import kamillaKarthigesu from '../assets/kamilla-karthigesu.png'
import savannahLouie from '../assets/savannah-louie.png'
import rizoVelovic from '../assets/rizo-velovic.png'

const photos: Record<string, string> = {
  'colby-donaldson': colbyDonaldson,
  'jenna-lewis': jennaLewis,
  'stephenie-lagrossa': stephenieLagrossa,
  'cirie-fields': cirieFields,
  'ozzy-lusth': ozzyLusth,
  'coach-wade': coachWade,
  'aubry-bracco': aubryBracco,
  'chrissy-hofbeck': chrissyHofbeck,
  'christian-hubicki': christianHubicki,
  'angelina-keeley': angelinaKeeley,
  'mike-white': mikeWhite,
  'rick-devens': rickDevens,
  'jonathan-young': jonathanYoung,
  'emily-flippen': emilyFlippen,
  'dee-valladares': deeValladares,
  'q-burdette': qBurdette,
  'charlie-davis': charlieDavis,
  'tiffany-ervin': tiffanyErvin,
  'genevieve-mushaluk': genevieveMushaluk,
  'kyle-fraser': kyleFraser,
  'joe-hunter': joeHunter,
  'kamilla-karthigesu': kamillaKarthigesu,
  'savannah-louie': savannahLouie,
  'rizo-velovic': rizoVelovic,
}

export const contestants: Contestant[] = rawContestants.map((c) => ({
  name: c.name,
  draftedBy: c.draftedBy,
  photo: photos[c.photoKey],
  originalTribe: c.originalTribe as Tribe,
  switchedTribe: c.switchedTribe as Tribe | undefined,
  advantage: c.advantage,
  age: c.age,
  hometown: c.hometown,
  seasons: c.seasons,
}))
