'use client'

import { askQuestion } from '@/utils/api'
import { load } from 'langchain/load'
import { useState } from 'react'

const Questions = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState()

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const answer = await askQuestion(value)
    setResponse(answer)
    setValue('')
    setLoading(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className='border border-black/20 px-4 py-2 text-lg rounded-lg '
          onChange={onChange}
          value={value}
          type='text'
          placeholder='Ask a question'
          disabled={loading}
        />
        <button
          className='bg-blue-400 px-4 py-2 rounded-lg text-lg'
          type='submit'
          disabled={loading}
        >
          Ask
        </button>
      </form>
      <div>
        {loading && <div>..loading</div>}
        {response && <div>{response}</div>}
      </div>
    </div>
  )
}
export default Questions
