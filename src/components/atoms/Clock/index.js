import { useState } from "react"

const Clock = () => {
  const ContClock = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
  const [clock, setclock] = useState(ContClock)

  setInterval(() => {
    setclock(new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}))
  }, 1000);
  
  return <div className="clock">
    <p>{ContClock}</p>
  </div>
} 



export default Clock