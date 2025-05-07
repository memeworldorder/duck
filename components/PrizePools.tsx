import React from 'react';
export default function PrizePools() {
  const pools = ['$100', '$250', '$500'];
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3">Prize Pools</h3>
      <ul className="space-y-2">
        {pools.map((p, i) => (
          <li key={i} className="flex justify-between">
            <span>Race {i+1}</span><span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 