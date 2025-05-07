import React from 'react';
const sample = [
  { name: 'user123', games: 120 },
  { name: 'player456', games: 110 },
  { name: 'duckmaster', games: 98 },
  { name: 'quack789', games: 90 },
  { name: 'racer202', games: 50 },
];

export default function Leaderboard() {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
      <ul className="space-y-2">
        {sample.map((u, i) => (
          <li key={u.name} className="flex justify-between">
            <span>{i + 1}. {u.name}</span>
            <span>{u.games} games</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 