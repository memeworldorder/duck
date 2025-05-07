/**
 * API route to end the current Duck Race raffle (admin only).
 * POST only. Accepts { winnerDuckNumber } in body. Returns updated raffle info.
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import store from '../../lib/raffleStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { winnerDuckNumber } = req.body;
  if (!winnerDuckNumber || typeof winnerDuckNumber !== 'number') {
    return res.status(400).json({ error: 'Missing or invalid winnerDuckNumber' });
  }
  try {
    const raffle = await store.endRaffle(winnerDuckNumber);
    return res.status(200).json(raffle);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
} 