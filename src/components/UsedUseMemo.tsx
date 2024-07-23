import { useMemo, useState } from 'react'

const UsedUseMemo = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(1)

  const completeExpenciveValue = (num: number) => {
    console.log('Starting expensive operation...')
    let value: number = num
    for (let i: number = 0; i < 1000000000; i++) {
      value += num
    }
    console.log(' done!')
    return value
  }

  const expenciveValue: number = useMemo(() => completeExpenciveValue(count), [count])

  return (
    <div>
      <h1>Used UseMemo</h1>
      <p>Складне обчислення:{expenciveValue}</p>
      <p> Просте значення (item): {item}</p>
      <button onClick={() => setCount(count + 1)}>Count++</button>
      <button onClick={() => setItem(item + 1)}>Item++</button>
    </div>
  )
}

export default UsedUseMemo
