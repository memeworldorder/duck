import React, { useState } from 'react';

/**
 * JoinRaffleForm - Allows web users to join the Duck Race raffle.
 * Calls the /api/join endpoint and displays the assigned duck number.
 * Accessible and production-ready.
 */
interface JoinRaffleFormProps {
  onJoinSuccess?: () => void;
}

const emojiList = ['🦆', '🐥', '🐧', '🦢', '🦉', '🦜', '🦩', '🐤', '🐦', '🦔', '🦄', '🐸', '🐢', '🐬', '🐳', '🐻', '🐶', '🐱', '🦊', '🐰'];
const getRandomEmoji = () => emojiList[Math.floor(Math.random() * emojiList.length)];

const JoinRaffleForm: React.FC<JoinRaffleFormProps> = ({ onJoinSuccess }) => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState<string>(getRandomEmoji());
  const [duckNumber, setDuckNumber] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Generate a unique ID for the user (in production, use auth/session)
  const getUserId = () => {
    if (typeof window !== 'undefined') {
      let id = localStorage.getItem('duck_user_id');
      if (!id) {
        id = 'web-' + Math.random().toString(36).slice(2);
        localStorage.setItem('duck_user_id', id);
      }
      return id;
    }
    return '';
  };

  const join = async () => {
    setLoading(true);
    setError(null);
    setDuckNumber(null);
    const id = getUserId();
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, name, avatar }),
      });
      const data = await res.json();
      if (data.duckNumber) {
        setDuckNumber(data.duckNumber);
        localStorage.setItem('duck_user_name', name);
        if (onJoinSuccess) onJoinSuccess();
      } else {
        setError(data.error || 'Failed to join raffle');
      }
    } catch (e) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800/80 rounded-xl p-6 shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Join the Duck Race Raffle</h2>
      <label htmlFor="join-name" className="block mb-2">Your Name</label>
      <input
        id="join-name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
        className="border px-2 py-1 rounded w-full mb-4 text-black"
        aria-label="Your Name"
        disabled={loading}
      />
      <label className="block mb-2">Choose Your Avatar</label>
      <div className="flex flex-wrap gap-2 mb-4">
        {emojiList.map((e) => (
          <button
            key={e}
            type="button"
            className={`text-2xl px-2 py-1 rounded ${avatar === e ? 'bg-green-500 text-white' : 'bg-gray-700'}`}
            onClick={() => setAvatar(e)}
            disabled={loading}
            aria-label={`Choose avatar ${e}`}
          >
            {e}
          </button>
        ))}
        <button
          type="button"
          className="ml-2 px-2 py-1 rounded bg-blue-600 text-white"
          onClick={() => setAvatar(getRandomEmoji())}
          disabled={loading}
        >
          Random
        </button>
      </div>
      <button
        onClick={join}
        className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded w-full font-semibold"
        disabled={loading || !name.trim()}
        aria-label="Join Raffle"
      >
        {loading ? 'Joining...' : 'Join Raffle'}
      </button>
      {duckNumber && (
        <div className="mt-4 text-lg text-green-300 font-bold">Your duck number: {duckNumber}</div>
      )}
      {error && (
        <div className="mt-4 text-red-400">{error}</div>
      )}
    </div>
  );
};

export default JoinRaffleForm;
export {}; 