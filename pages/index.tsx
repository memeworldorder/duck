import React from 'react';
import { DuckRaceCard } from './duck-race';
import Leaderboard from '../components/Leaderboard';
import UpcomingRaces from '../components/UpcomingRaces';
import PrizePools from '../components/PrizePools';

const games = [
  {
    key: 'duck-race',
    title: 'Duck Race',
    description: 'XP lottery mini-game',
    card: <DuckRaceCard />,
  },
  // Add more games here as you build them
  {
    key: 'coming-soon',
    title: 'More Games Coming Soon',
    description: 'Stay tuned for more MWOR mini-games!',
    card: (
      <div className="bg-gray-800/60 rounded-xl p-4 flex flex-col items-center opacity-60">
        <div className="text-4xl">🎮</div>
        <div className="font-bold mt-2">Coming Soon</div>
        <div className="text-sm text-gray-300 mb-3">More games will appear here</div>
        <button className="bg-gray-600 px-4 py-2 rounded text-sm font-semibold cursor-not-allowed" disabled>
          Locked
        </button>
      </div>
    ),
  },
];

/**
 * Dashboard - Main landing page for the Duck Race app.
 * Shows game cards, leaderboard, upcoming races, and prize pools.
 */
export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900 text-white p-8">
      <header className="mb-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">MWOR Arcade Dashboard</h1>
        <p className="text-lg text-blue-200">Choose a game to play and earn XP!</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
        {games.map((g) => (
          <div key={g.key}>{g.card}</div>
        ))}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Leaderboard />
        <UpcomingRaces />
        <PrizePools />
      </section>
    </main>
  );
} 