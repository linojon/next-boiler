import { User } from '@prisma/client';
import prisma from 'src/lib/prisma';

const get_user_by_email = async (email: string): Promise<User> => {
  const userPromise = prisma.user.findUnique({
    where: { email },
  });

  return userPromise;
};

export default get_user_by_email;
