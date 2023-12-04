import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { ReactNode } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/journal', label: 'Journal' },
]

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-screen w-screen relative bg-gradient-to-br from-zinc-900 to-slate-800 text-white/90'>
      <aside className='absolute w-[200px] top-0 left-0 h-full border-r border-white/50 '>
        <div>Mood</div>
        <ul>
          {links.map((link) => (
            <li key={link.href} className='px-2 py-6 text-xl'>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className='ml-[200px] h-full]'>
        <header className='h-[60px] border-b  border-white/50'>
          <div className='h-full w-full px-6 flex items-center justify-end'>
            <UserButton />
          </div>
        </header>
        <div className='h-[calc(100vh-60px)]'>{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
