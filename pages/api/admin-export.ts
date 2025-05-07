/**
 * API route to export all Duck Race raffles, participants, and results as JSON (admin only).
 * GET only. Returns a JSON file.
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end();
  try {
    const races = await prisma.race.findMany({
      include: {
        participants: { include: { participant: true } },
        winner: true,
        results: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="raffles.json"');
    return res.status(200).json(races);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
} 