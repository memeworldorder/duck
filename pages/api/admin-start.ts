/**
 * API route to start a new Duck Race raffle (admin only).
 * POST only. Returns the new raffle info.
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import store from '../../lib/raffleStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    const raffle = await store.startRaffle();
    return res.status(200).json(raffle);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
} 