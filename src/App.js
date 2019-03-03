import React, { useRef, createContext } from 'react'
import { useTitleInput } from './hooks/useTitleInput'
import Toggle from './Toggle'
import Counter from './Counter'

export const UserContext = createContext()

const App = () => {
  const [name, setName] = useTitleInput('test')
  const ref = useRef()

  return (
    <UserContext.Provider
      value={{
        user: false
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1>Level Up Dishes</h1>
        <Toggle />
        <Counter />
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
    </UserContext.Provider>
  )
}

export default App
