const createURL = (path) => {
  return window.location.origin + path
}

export const updateEntry = async (id, content) => {
  const response = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: 'PATCH',
      body: JSON.stringify({ content }),
    }),
  )
  if (response.ok) {
    const data = await response.json()
    return data.data
  }
}

export const createNewEntry = async () => {
  const response = await fetch(
    new Request(createURL('/api/journal'), {
      method: 'POST',
    }),
  )
  if (response.ok) {
    const data = await response.json()
    return data.data
  }
}
