/**
 * Prisma Client singleton for database access.
 * Ensures a single instance in development and production.
 */
import { PrismaClient } from '../lib/generated/prisma';

// Prevent multiple instances in development
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma; 