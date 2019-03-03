import { useState, useEffect, useDebugValue } from 'react'

function useTitleInput(initialValue = '') {
  const [value, setValue] = useState(initialValue)
  useEffect(() => {
    document.title = value
  })
  useDebugValue('Costum debug value here')
  return [value, setValue]
}

export { useTitleInput }
