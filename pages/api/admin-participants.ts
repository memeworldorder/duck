/**
 * API route to list all current participants in the active Duck Race raffle (admin only).
 * GET only. Returns an array of participants.
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import store from '../../lib/raffleStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end();
  try {
    const participants = await store.getParticipants();
    return res.status(200).json(participants);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
} 