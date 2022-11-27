import { UserRole, Status, User } from '@prisma/client'
import { Session } from 'next-auth'

export function mockSession(): Session {
  return {
    id: 'mocksession',
    sessionToken: 'sessiontoken',
    userId: 'mockuserid',
    expires: '2999-1-1',
    user: mockUser()
  }
}

export function mockUser(): User {
  return {
    id: 'mockuserid',
    name: 'Mock User',
    email: 'mockuser@email.com',
    emailVerified: null,
    image: null,
    role: UserRole.ADMIN,
    status: Status.LIVE,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

export function skipAuth(): boolean {
  // return !!runtimeEnvironment?.skipauth

  return false

  // console.error('SKIPAUTH true')
  // return true
}
