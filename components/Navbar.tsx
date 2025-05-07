import React from 'react';
import Link from 'next/link';

/**
 * Navbar - Main navigation bar for the Duck Race app.
 * Includes links to Dashboard, Duck Race, and Admin.
 * Accessible and production-ready.
 */
const Navbar: React.FC = () => (
  <nav className="w-full bg-gray-900 text-white shadow-lg">
    <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-6">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold hover:text-yellow-300" aria-label="Dashboard">Dashboard</a>
        </Link>
        <Link href="/duck-race" legacyBehavior>
          <a className="text-lg hover:text-yellow-300" aria-label="Duck Race">Duck Race</a>
        </Link>
        <Link href="/admin" legacyBehavior>
          <a className="text-lg hover:text-yellow-300" aria-label="Admin Dashboard">Admin</a>
        </Link>
      </div>
      <div className="text-yellow-400 font-mono text-sm">🦆 Duck Race</div>
    </div>
  </nav>
);

export default Navbar; 