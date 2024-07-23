import { useCallback, useEffect, useState } from 'react'

const UsedUseCallback = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log('1st')
    setCount((prevState) => prevState + 1)
  }, [])

  useEffect(() => {
    console.log('2nd')
  }, [handleClick])

  return (
    <div>
      <h1>Used UseCallback</h1>
      <p>
        You clicked {count} {count > 1 ? 'times' : 'time'}
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default UsedUseCallback
