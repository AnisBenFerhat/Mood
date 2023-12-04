import { analyze } from '@/utils/ai'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const PATCH = async (request: Request, { params }) => {
  try {
    const { content } = await request.json()
    const user = await getUserByClerkID()

    const updatedEntry = await prisma.journalEntry.update({
      where: {
        userId_id: {
          userId: user.id,
          id: params.id,
        },
      },
      data: {
        content,
      },
    })

    const analysis = await analyze(updatedEntry.content)

    const updatedAnalysis = await prisma.analysis.upsert({
      where: {
        entryId: updatedEntry.id,
      },
      create: {
        entryId: updatedEntry.id,
        ...analysis,
      },
      update: {
        ...analysis,
      },
    })

    return NextResponse.json({ data: updatedEntry })
  } catch (error) {
    console.error('Error in PATCH request:', error)
    return NextResponse.error(error.message || 'An error occurred')
  }
}
