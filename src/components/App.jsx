import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const [mousePosition, setMousePosition] =  useState({x: null, y: null})
  const [status, setStatus] = useState(navigator.onLine)

 useEffect(() => {
  document.title = `you have clicked ${count}`
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('online', handleOnline)
  window.addEventListener('offline', handleOffline)

  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('online', handleOnline)
    window.removeEventListener('offline', handleOffline)
  }
 }, [count])

 const handleOnline = e => {
  setStatus(true)
 }
 const handleOffline = e => {
  setStatus(false)
 }

 const handleMouseMove = e => {
  setMousePosition({
    x: e.pageX,
    y: e.pageY
  })
 }

 const incremental = () => {
  setCount(prevCount => prevCount + 1)
 }

 const toggling = () => {
  setIsOn(!isOn)
 }

  return (
    <>
      <h1>Couter</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>Toggle Light</h1>
      <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: isOn ? 'yellow' : 'gray'
      }}
      >

      </div>
      <button onClick={toggling}>toggle</button>
      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <br />

      <h1>Network Status</h1>
      <p>Network { status? "online" : "offline" } </p>
    </>
  )
}

export default App
