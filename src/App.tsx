import { useMemo, useState } from 'react'
import './App.css'
import TeamRow from './components/TeamRow'
import PlayerDialog from './components/PlayerDialog'
import Timeline from './components/Timeline'
import { contestants } from './data/contestants'
import {
  eliminatedByEpisode,
  headerLogo,
  teamOrder,
  trackedEpisodes,
  voteHistory,
  votedOff,
} from './data/gameData'

type Tab = 'teams' | 'timeline'

function App() {
  const [selectedName, setSelectedName] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<Tab>('teams')
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
        <nav className="tab-nav">
          <button
            className={`tab-btn${activeTab === 'teams' ? ' active' : ''}`}
            onClick={() => setActiveTab('teams')}
          >
            Teams
          </button>
          <button
            className={`tab-btn${activeTab === 'timeline' ? ' active' : ''}`}
            onClick={() => setActiveTab('timeline')}
          >
            Timeline
          </button>
        </nav>
      </header>

      {activeTab === 'teams' && (
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
      )}

      {activeTab === 'timeline' && (
        <Timeline contestants={contestants} />
      )}

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
