/**
 * API route to reset all Duck Race raffles and participants (admin only).
 * POST only. Returns { success: true } on success.
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import store from '../../lib/raffleStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  try {
    await store.reset();
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
} 