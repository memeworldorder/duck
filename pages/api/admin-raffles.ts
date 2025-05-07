/**
 * API route to list all Duck Race raffles with participants and winner info (admin only).
 * GET only. Returns an array of raffles.
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
      },
      orderBy: { createdAt: 'desc' },
    });
    // Format for admin dashboard
    const formatted = races.map((race) => ({
      id: race.id,
      startedAt: race.createdAt,
      finishedAt: race.endedAt,
      winnerDuckNumber: race.winnerId
        ? race.participants.findIndex((rp) => rp.participantId === race.winnerId) + 1
        : null,
      participants: race.participants.map((rp, i) => ({
        id: rp.participant.id,
        name: rp.participant.name,
        avatar: rp.participant.avatar,
        duckNumber: i + 1,
      })),
    }));
    return res.status(200).json(formatted);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
} 