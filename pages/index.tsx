import React, { useEffect } from 'react';
import { DuckRaceCard } from './duck-race';
import Leaderboard from '../components/Leaderboard';
import UpcomingRaces from '../components/UpcomingRaces';
import PrizePools from '../components/PrizePools';
import { useRouter } from 'next/router';

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
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/duck-race');
  }, [router]);
  return null;
} 