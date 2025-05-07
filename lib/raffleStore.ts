/**
 * RaffleStore - Database-backed store for participants and raffles using Prisma.
 * Production-grade: persistent, type-safe, and ready for scaling.
 */
import prisma from './prisma';

export interface Participant {
  id: string;
  name: string;
  duckNumber: number;
  avatar?: string;
}

export interface Raffle {
  id: string;
  startedAt: string;
  finishedAt: string | null;
  winnerDuckNumber: number | null;
  participants: Participant[];
}

class RaffleStore {
  /** Start a new raffle (Race) */
  async startRaffle() {
    const race = await prisma.race.create({
      data: {},
    });
    return race;
  }

  /** Join the current raffle (Race) as a participant */
  async join(id: string, name: string, avatar?: string) {
    // Find or create participant
    let participant = await prisma.participant.findUnique({ where: { id } });
    if (!participant) {
      participant = await prisma.participant.create({
        data: { id, name, avatar },
      });
    } else if (avatar && participant.avatar !== avatar) {
      // Update avatar if changed
      participant = await prisma.participant.update({ where: { id }, data: { avatar } });
    }
    // Get current race
    const race = await this.getCurrentRaffle();
    if (!race) throw new Error('No active race');
    // Check if already joined
    const alreadyJoined = await prisma.raceParticipant.findUnique({
      where: { raceId_participantId: { raceId: race.id, participantId: id } },
    });
    if (alreadyJoined) return participant;
    // Assign next duck number (count participants in this race)
    const count = await prisma.raceParticipant.count({ where: { raceId: race.id } });
    // Join race
    await prisma.raceParticipant.create({
      data: {
        raceId: race.id,
        participantId: id,
        joinedAt: new Date(),
      },
    });
    return { ...participant, duckNumber: count + 1 };
  }

  /** Get all participants in the current raffle */
  async getParticipants() {
    const race = await this.getCurrentRaffle();
    if (!race) return [];
    const raceParticipants = await prisma.raceParticipant.findMany({
      where: { raceId: race.id },
      include: { participant: true },
      orderBy: { joinedAt: 'asc' },
    });
    return raceParticipants.map((rp, i) => ({
      id: rp.participant.id,
      name: rp.participant.name,
      avatar: rp.participant.avatar,
      duckNumber: i + 1,
    }));
  }

  /** End the current raffle and pick a winner */
  async endRaffle(winnerDuckNumber: number) {
    const race = await this.getCurrentRaffle();
    if (!race) return null;
    // Get winner by duck number
    const raceParticipants = await prisma.raceParticipant.findMany({
      where: { raceId: race.id },
      include: { participant: true },
      orderBy: { joinedAt: 'asc' },
    });
    const winner = raceParticipants[winnerDuckNumber - 1]?.participant;
    if (!winner) throw new Error('Winner not found');
    // Update race with winner
    const updatedRace = await prisma.race.update({
      where: { id: race.id },
      data: {
        endedAt: new Date(),
        winnerId: winner.id,
      },
    });
    // Save results
    await Promise.all(
      raceParticipants.map((rp, i) =>
        prisma.result.create({
          data: {
            raceId: race.id,
            participantId: rp.participant.id,
            place: i + 1,
            finishedAt: new Date(),
          },
        })
      )
    );
    return updatedRace;
  }

  /** Get the current raffle (most recent Race that hasn't ended) */
  async getCurrentRaffle() {
    return prisma.race.findFirst({
      where: { endedAt: null },
      orderBy: { createdAt: 'desc' },
    });
  }

  /** Get all raffles (races) */
  async getRaffles() {
    return prisma.race.findMany({ orderBy: { createdAt: 'desc' } });
  }

  /** Reset all raffles and participants (dangerous!) */
  async reset() {
    await prisma.result.deleteMany({});
    await prisma.raceParticipant.deleteMany({});
    await prisma.race.deleteMany({});
    await prisma.participant.deleteMany({});
  }
}

const store = new RaffleStore();
export default store; 