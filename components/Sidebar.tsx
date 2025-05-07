import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Profile', href: '/profile' },
  { label: 'Settings', href: '/settings' },
];
const games = [{ label: 'Duck Race', href: '/' }];

export default function Sidebar() {
  const router = useRouter();
  return (
    <aside className="w-64 bg-gray-800 min-h-screen p-4 space-y-8">
      <div className="text-2xl font-bold">🐤 Duck Race</div>
      <nav>
        <ul className="space-y-2">
          {navItems.map(item => (
            <li key={item.href}>
              <Link href={item.href} legacyBehavior>
                <a className={`block px-3 py-2 rounded ${router.pathname === item.href ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <h3 className="text-sm uppercase tracking-wide text-gray-400">Games</h3>
        <ul className="mt-2 space-y-2">
          {games.map(game => (
            <li key={game.href}>
              <Link href={game.href} legacyBehavior>
                <a className="block px-3 py-2 hover:bg-gray-700 rounded">{game.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
} 