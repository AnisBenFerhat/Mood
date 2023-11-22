import { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-screen w-screen relative bg-gradient-to-br from-zinc-900 to-slate-800 text-white/90'>
      <aside className='absolute w-[200px] top-0 left-0 h-full border-r border-white/50 '>
        Mood
      </aside>
      <div className='ml-[200px]'>
        <header className='h-[60px] border-b  border-white/50'>Hello</header>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
