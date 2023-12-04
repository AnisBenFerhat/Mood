'use client'

import { updateEntry } from '@/utils/api'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const updated = await updateEntry(entry.id, _value)
      setIsLoading(false)
    },
  })

  return (
    <div className='w-full h-full'>
      {isLoading && <div>...loading</div>}
      <textarea
        className='w-full h-full p-8 text-xl outline-none bg-white/90 text-gray-900'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></textarea>
    </div>
  )
}
export default Editor