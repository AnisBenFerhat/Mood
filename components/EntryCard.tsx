const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString()
  return (
    <div className='divide-y divide-gray-400 overflow-hidden rounded-lg bg-white/90 text-gray-900 shadow'>
      <div className='px-4 py-5'>{date}</div>
      <div className='px-4 py-5'>summary</div>
      <div className='px-4 py-4'>mood</div>
    </div>
  )
}

export default EntryCard
