import { useState } from "react"

const HourClock = () => {
  const ContClock = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
  const [clock, setclock] = useState(ContClock)

  setInterval(() => {
    setclock(new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}))
  }, 1000);

  return <div className="clockCircle">
    <p className="clockData">{clock}</p>
  </div>
}

export default HourClock