import React, { useState, useEffect } from 'react';
import AdminLoginForm from '../components/AdminLoginForm';

/**
 * AdminRaffle type for displaying recent raffles.
 */
interface AdminRaffle {
  id: string;
  startedAt: string;
  finishedAt: string | null;
  winnerDuckNumber: number | null;
  participants: { id: string; name: string; duckNumber: number }[];
}

/**
 * AdminDashboard - Production-grade admin page for managing Duck Race raffles.
 * Includes summary of recent raffles, advanced controls, and authentication.
 */
const AdminDashboard: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [raffles, setRaffles] = useState<AdminRaffle[]>([]);
  const [participants, setParticipants] = useState<AdminRaffle['participants']>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [selectedWinner, setSelectedWinner] = useState<number | null>(null);

  // Check for admin cookie
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setAuthenticated(document.cookie.includes('admin=1'));
    }
  }, []);

  // Fetch raffles and participants
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const r = await fetch('/api/admin-raffles');
      setRaffles(await r.json());
      const p = await fetch('/api/admin-participants');
      setParticipants(await p.json());
    } catch (e) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => { if (authenticated) fetchData(); }, [authenticated]);

  // Admin actions
  const startRaffle = async () => {
    setLoading(true); setMessage(null); setError(null);
    try { await fetch('/api/admin-start', { method: 'POST' }); setMessage('Raffle started'); fetchData(); } catch { setError('Failed to start raffle'); } finally { setLoading(false); }
  };
  const endRaffle = async () => {
    setLoading(true); setMessage(null); setError(null);
    if (!selectedWinner) {
      setError('Select a winner duck number');
      setLoading(false);
      return;
    }
    try {
      await fetch('/api/admin-end', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ winnerDuckNumber: selectedWinner }),
      });
      setMessage(`Raffle ended. Winner: Duck #${selectedWinner}`);
      setSelectedWinner(null);
      fetchData();
    } catch {
      setError('Failed to end raffle');
    } finally {
      setLoading(false);
    }
  };
  const reset = async () => {
    setLoading(true); setMessage(null); setError(null);
    try { await fetch('/api/admin-reset', { method: 'POST' }); setMessage('All raffles reset'); fetchData(); } catch { setError('Failed to reset'); } finally { setLoading(false); }
  };
  const exportData = async () => {
    setLoading(true); setMessage(null); setError(null);
    try {
      const res = await fetch('/api/admin-export');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'raffles.json';
      a.click();
      setMessage('Exported raffles as JSON');
    } catch { setError('Failed to export'); } finally { setLoading(false); }
  };

  if (!authenticated) return <AdminLoginForm onLogin={() => setAuthenticated(true)} />;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-950 text-white p-8">
      <header className="mb-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Duck Race Admin Dashboard</h1>
        <p className="text-lg text-blue-200">Manage raffles, view stats, and export results.</p>
      </header>
      <section className="max-w-3xl mx-auto bg-gray-800/80 rounded-xl p-6 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Admin Controls</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <button onClick={startRaffle} className="bg-green-600 px-4 py-2 rounded font-semibold" disabled={loading}>Start Raffle</button>
          <select
            className="bg-gray-900 text-white px-2 py-1 rounded border border-blue-700"
            value={selectedWinner ?? ''}
            onChange={e => setSelectedWinner(Number(e.target.value) || null)}
            disabled={loading || participants.length === 0}
            aria-label="Select Winner Duck Number"
          >
            <option value="">Select Winner</option>
            {participants.map((p) => (
              <option key={p.id} value={p.duckNumber}>{`Duck #${p.duckNumber} (${p.name})`}</option>
            ))}
          </select>
          <button onClick={endRaffle} className="bg-yellow-600 px-4 py-2 rounded font-semibold" disabled={loading || !selectedWinner}>End Raffle</button>
          <button onClick={exportData} className="bg-blue-600 px-4 py-2 rounded font-semibold" disabled={loading}>Export</button>
          <button onClick={reset} className="bg-red-600 px-4 py-2 rounded font-semibold" disabled={loading}>Reset</button>
        </div>
        {message && <div className="text-green-400 mb-2">{message}</div>}
        {error && <div className="text-red-400 mb-2">{error}</div>}
      </section>
      <section className="max-w-3xl mx-auto bg-gray-800/80 rounded-xl p-6 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Current Participants</h2>
        <ul className="space-y-1">
          {participants.map((p) => (
            <li key={p.id} className="bg-blue-900/40 px-4 py-2 rounded flex justify-between">
              <span>Duck #{p.duckNumber}</span>
              <span className="font-mono">{p.name}</span>
            </li>
          ))}
          {participants.length === 0 && <li className="text-center text-gray-400">No participants</li>}
        </ul>
      </section>
      <section className="max-w-3xl mx-auto bg-gray-800/80 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Recent Raffles</h2>
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th className="px-2 py-1">ID</th>
              <th className="px-2 py-1">Started</th>
              <th className="px-2 py-1">Finished</th>
              <th className="px-2 py-1">Winner</th>
              <th className="px-2 py-1">Participants</th>
            </tr>
          </thead>
          <tbody>
            {raffles.map((raffle) => (
              <tr key={raffle.id} className="bg-blue-900/40 rounded">
                <td className="px-2 py-1 font-mono">{raffle.id}</td>
                <td className="px-2 py-1">{new Date(raffle.startedAt).toLocaleString()}</td>
                <td className="px-2 py-1">{raffle.finishedAt ? new Date(raffle.finishedAt).toLocaleString() : <span className="text-yellow-400">In Progress</span>}</td>
                <td className="px-2 py-1">{raffle.winnerDuckNumber ? `Duck #${raffle.winnerDuckNumber}` : '-'}</td>
                <td className="px-2 py-1">
                  {raffle.participants.map((p, i) => (
                    <span key={p.id} className="inline-block bg-blue-700/60 rounded px-2 py-0.5 mr-1 text-xs font-mono">
                      {p.name}
                      {i < raffle.participants.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default AdminDashboard; 