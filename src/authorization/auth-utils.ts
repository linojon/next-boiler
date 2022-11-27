import { User } from '@prisma/client';
import { Session } from 'next-auth';
import { skipAuth, mockUser } from './auth-mock';
import { roleAccess } from './roleAccess';

const currentUser = ({ data: session }, mockRole = null): User => {
  if (skipAuth()) return mockUser();
  return session?.userData;
};

const isAuthenticating = ({ data: session }): boolean => {
  return session?.status === 'loading';
};

const userIsAuthorized = (user: User, role: string): User => {
  return userHasRoles(user, roleAccess[role]);
};

const userHasRoles = (user: User, roles: string[]): User => {
  if (skipAuth()) return mockUser();
  return user && user.role && roles.includes(user.role) && user;
};

const userIsAdmin = (user: User): User => {
  return userHasRoles(user, roleAccess.admin);
};

const userIsMember = (user: User): User => {
  return userHasRoles(user, roleAccess.member);
};

const userIsGuest = (user: User): User => {
  return userHasRoles(user, roleAccess.guest);
};

// returns user if he is authorized else falsey
const currentAuthorizedUser = (session, role, mockRole = null): User => {
  return userHasRoles(currentUser(session, mockRole), roleAccess[role]);
};

export {
  currentUser,
  isAuthenticating,
  userIsAuthorized,
  //
  userHasRoles,
  userIsAdmin,
  userIsMember,
  userIsGuest,
  currentAuthorizedUser,
};
