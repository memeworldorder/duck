import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * API route for admin login. Sets HttpOnly cookie on success.
 * In production, use a strong password and HTTPS.
 */
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'changeme';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.setHeader('Set-Cookie', 'admin=1; Path=/; HttpOnly; SameSite=Strict');
    return res.status(200).json({ success: true });
  }
  return res.status(401).json({ error: 'Invalid password' });
} 