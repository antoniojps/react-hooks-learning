import React, { useState } from 'react'
import Toggle from './Toggle'

const App = () => {
  // const [value, setValue] = useState(initialState)
  const [name, setName] = useState('')

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
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
