import React from 'react';
export default function UpcomingRaces() {
  const races = [
    { label: 'Today', time: '12:00' },
    { label: 'Apr 26', time: '16:00' },
  ];
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3">Upcoming Races</h3>
      <ul className="space-y-2">
        {races.map(r => (
          <li key={r.label} className="flex justify-between">
            <span>{r.label}</span><span>{r.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 