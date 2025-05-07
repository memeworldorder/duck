import React, { useState } from 'react';

/**
 * AdminLoginForm - Secure login form for admin dashboard.
 * Calls /api/admin-login and sets state on success.
 * Accessible and production-ready.
 */
const AdminLoginForm: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        onLogin();
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (e) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="bg-gray-800/80 rounded-xl p-6 shadow-lg max-w-md mx-auto mt-8"
      onSubmit={e => { e.preventDefault(); login(); }}
      aria-label="Admin Login Form"
    >
      <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
      <label htmlFor="admin-password" className="block mb-2">Password</label>
      <input
        id="admin-password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="border px-2 py-1 rounded w-full mb-4 text-black"
        aria-label="Admin Password"
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded w-full font-semibold"
        disabled={loading || !password.trim()}
        aria-label="Login"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && (
        <div className="mt-4 text-red-400">{error}</div>
      )}
    </form>
  );
};

export default AdminLoginForm; 