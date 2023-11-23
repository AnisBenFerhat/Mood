import { prisma } from './db'
import { auth } from '@clerk/nextjs'

export const getUserByClerkID = async () => {
  const { userId } = await auth()

  if (!userId) {
    throw new Error('User ID is null')
  }

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId as string, // Use a type assertion here
    },
  })

  return user
}
