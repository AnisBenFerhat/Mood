import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import { analyze } from '@/utils/ai'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import Link from 'next/link'

const getEntries = async () => {
  const user = await getUserByClerkID()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  // await analyze(
  //   `I am going to give you a journal entry. I want you to analyze for a few things : I need the mood, a summary, what the subject is and a color representing the Mood. You need to respond back with formatted JSON like so: {"mood": "", "subject": "", "color": "", "negative": ""} the mood should translate something like : happy, anger, joy, sadness and so on..
  //   entry:
  //   Today was a really great day. I finally was able to grab that pair of shoes I have dying to get.
  //   `,
  // )
  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()

  return (
    <div className='p-10 h-full'>
      <h2 className='text-3xl mb-8'>My Journal</h2>
      <div className='grid grid-cols-3 gap-4 px-10'>
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard key={entry.id} entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default JournalPage
