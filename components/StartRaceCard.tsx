import React, { useState } from 'react';

const ducks = Array.from({ length: 12 }, (_, i) => i + 1);

export default function StartRaceCard() {
  const [winner, setWinner] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setWinner(null);
    setLoading(true);
    setTimeout(() => {
      setWinner(Math.floor(Math.random() * ducks.length) + 1);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 space-y-4">
      <h2 className="text-xl font-semibold">Start a Race</h2>
      <div className="grid grid-cols-6 gap-2">
        {ducks.map(num => (
          <div key={num} className="relative">
            <span className="block bg-gray-700 rounded-full p-3 text-center text-sm">{num}</span>
            {winner === num && <span className="absolute top-0 right-0 bg-green-500 rounded-full w-4 h-4" />}
          </div>
        ))}
      </div>
      <button onClick={start} className="mt-4 w-full bg-blue-600 hover:bg-blue-500 py-2 rounded">
        Start Race
      </button>
      <div className="mt-2 text-center text-lg">
        {loading && <span>Racing...</span>}
        {!loading && winner && <span>Winner: Duck #{winner}</span>}
        {!loading && !winner && <span>Click Start Race!</span>}
      </div>
    </div>
  );
} 