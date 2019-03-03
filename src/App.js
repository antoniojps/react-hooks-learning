import React, { useState, useRef, useEffect } from 'react'
import { useTitleInput } from './hooks/useTitleInput'

const App = () => {
  const [name, setName] = useTitleInput('test')
  const ref = useRef()

  const [dishes, setDishes] = useState([])
  const fetchDishes = async () => {
    console.log('fetchDishes')
    const res = await fetch(
      'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
    )
    const data = await res.json()
    setDishes(data)
  }

  useEffect(() => {
    fetchDishes()
  }, [name])

  return (
    <div className="main-wrapper" ref={ref}>
      <h1>Level Up Dishes</h1>
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
      {dishes.map(dish => (
        <article className="dish-card dish-card--withImage" key={dish.name}>
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map(ingredient => (
              <span key={ingredient}>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

export default App
