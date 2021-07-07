import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import FavIcon from '../../../assets/image/fav.png'
import ClockIcon from '../../../assets/image/clock.png'
import PomodoroIcon from '../../../assets/image/pomodoro.png'
import SocialmediaIcon from '../../../assets/image/socialmedia.png'
import WeatherIcon from '../../../assets/image/weather.png'
import CalcIcon from '../../../assets/image/Vector.png'
import TimerIcon from '../../../assets/image/timer.png'
import StreamingIcon from '../../../assets/image/streaming.png'

const MainMenu = (props) => {
  const history = useHistory()

  return <div className="contentContainer">
    <div id="allIcons">
      <div className="menuItem" onClick={()=> {history.push('/clock')}}>
        <img src={ClockIcon} className="menuIcon"></img>
      </div>
      <div className="menuItem" onClick={()=> {history.push('/weather')}}>
        <img src={WeatherIcon} className="menuIcon"></img>
      </div>
      <div className="menuItem">
        <img src={TimerIcon} className="menuIcon"></img>
      </div>
      <div className="menuItem">
        <img src={PomodoroIcon} className="menuIcon"></img>
      </div>
      <div className="menuItem">
        <img src={CalcIcon} className="menuIcon"></img>
      </div>
      <div className="menuItem">
        <img src={FavIcon} className="menuIcon"></img>
      </div>
      <div className="menuItem">
        <img src={StreamingIcon} className="menuIcon"></img>
      </div>
      <div className="menuItem">
        <img src={SocialmediaIcon} className="menuIcon"></img>
      </div>
    </div>
  </div>
}

export default MainMenu