import React, { useRef, useMemo } from 'react'
import { useTitleInput } from './hooks/useTitleInput'

const App = () => {
  const [name, setName] = useTitleInput('test')
  const ref = useRef()

  const reverseWord = word => {
    console.log('function invoked')
    return word
      .split('')
      .reverse()
      .join('')
  }
  const title = 'Antonio Santos'
  const TitleReversed = useMemo(() => reverseWord(title), [title])

  return (
    <div className="main-wrapper" ref={ref}>
      <h1>{TitleReversed}</h1>
      <button onClick={() => console.log(ref.current.className)}>
        Check ref
      </button>
      <form
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
