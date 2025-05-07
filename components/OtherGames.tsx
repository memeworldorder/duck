import React from 'react';
export default function OtherGames() {
  const games = ['Fishing Derby', 'Turtle Run'];
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3">Other Games</h3>
      <ul className="space-y-2">
        {games.map(g => <li key={g}>{g}</li>)}
      </ul>
    </div>
  );
} 