import { useMemo, useState } from 'react'
import './App.css'
import TeamRow from './components/TeamRow'
import PlayerDialog from './components/PlayerDialog'
import { contestants } from './data/contestants'
import {
  eliminatedByEpisode,
  headerLogo,
  teamOrder,
  trackedEpisodes,
  voteHistory,
  votedOff,
} from './data/gameData'

function App() {
  const [selectedName, setSelectedName] = useState<string | null>(null)
  const teams = useMemo(
    () =>
      teamOrder.map((person) => ({
        name: person,
        players: contestants.filter((contestant) => contestant.draftedBy === person),
      })),
    [],
  )

  const selectedContestant = useMemo(
    () => contestants.find((contestant) => contestant.name === selectedName) ?? null,
    [selectedName],
  )

  return (
    <main className="page">
      <header className="page-header">
        <img className="header-logo" src={headerLogo} alt="Survivor 50 In the Hands of the Fans" />
      </header>

      <div className="teams">
        {teams.map((team) => (
          <TeamRow
            key={team.name}
            name={team.name}
            players={team.players}
            votedOff={votedOff}
            onSelect={(contestant) => setSelectedName(contestant.name)}
          />
        ))}
      </div>

      {selectedContestant ? (
        <PlayerDialog
          selectedContestant={selectedContestant}
          contestants={contestants}
          voteHistory={voteHistory}
          trackedEpisodes={trackedEpisodes}
          eliminatedByEpisode={eliminatedByEpisode}
          onClose={() => setSelectedName(null)}
        />
      ) : null}
    </main>
  )
}

export default App
