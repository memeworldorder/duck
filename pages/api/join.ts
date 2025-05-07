/**
 * API route for joining the Duck Race raffle (web or Telegram).
 * Accepts POST { id, name, avatar } and returns assigned duck number.
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import store from '../../lib/raffleStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { id, name, avatar } = req.body;
  if (!id || !name) return res.status(400).json({ error: 'Missing id or name' });
  try {
    const participant = await store.join(id, name, avatar);
    // Always get participant info from getParticipants for type safety
    const raceParticipants = await store.getParticipants();
    const found = raceParticipants.find((p) => p.id === id);
    return res.status(200).json({ duckNumber: found?.duckNumber ?? null, avatar: found?.avatar ?? null });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
} 