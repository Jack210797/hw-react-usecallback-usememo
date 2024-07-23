import { useEffect, useState } from 'react'

const NotUsed = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log('1st')
    setCount(count + 1)
  }
  useEffect(() => {
    console.log('2nd')
  }, [handleClick])

  return (
    <div>
      <h1>Not used hooks</h1>
      <p>
        You clicked {count} {count > 1 ? 'times' : 'time'}
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default NotUsed
