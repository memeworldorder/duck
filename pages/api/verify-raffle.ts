/**
 * API route to verify JWT for Duck Race raffle data.
 * Ensures only server-signed data is accepted by the mini app.
 *
 * Query: ?token=... (JWT)
 *
 * Returns: { valid: boolean, data?: object, error?: string }
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query;
  if (!token || typeof token !== 'string') {
    return res.status(400).json({ valid: false, error: 'Missing token' });
  }
  try {
    const data = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET!);
    return res.status(200).json({ valid: true, data });
  } catch (e) {
    return res.status(400).json({ valid: false, error: 'Invalid or expired token' });
  }
} 