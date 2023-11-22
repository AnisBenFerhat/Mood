import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? '/journal' : '/new-user'

  return (
    <div className='w-screen h-screen bg-gradient-to-br from-zinc-900 to-slate-800 flex justify-center items-center text-white'>
      <div className='w-full max-w-[800px] mx-auto'>
        <h1 className='text-6xl mb-4 text-fuchsia-200'>
          Mood. <span className='text-4xl'>where emotions become stories.</span>
        </h1>
        <p className='text-2xl text-white/70 mb-4'>
          Capture your thoughts, moods, and life's moments. Analyze your emotions, find patterns,
          and embrace growth through introspection
        </p>
        <div>
          <Link href='/journal'>
            <button className='bg-purple-600/75 px-4 py-2 rounded-lg text-xl '>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
