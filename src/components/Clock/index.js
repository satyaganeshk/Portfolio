import {useState, useEffect} from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours()
  let greeting

  if (hours < 12) {
    greeting = 'Good Morning'
  } else if (hours < 18) {
    greeting = 'Good Afternoon'
  } else {
    greeting = 'Good Evening'
  }

  return (
    <div className="d-inline-flex">
      <h2 className="d-inline-flex h1">{greeting}!</h2>
    </div>
  )
}

export default Clock
