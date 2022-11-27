import { User as PrismaUser } from '@prisma/client';
import { Session } from 'next-auth';

export interface UserSession extends Session {
  userData: PrismaUser;
}
