import {
  useHistory
} from "react-router-dom";

const Header = (props) => {
  const history = useHistory()

  return <div className="header">
    <div className="closeIcon" onClick={() => {history.push('../')}}><img src={props.icon} id="backIcon"></img></div>
    <p className="centerTxt">{props.title}</p>
    <p className="rightTxt">{props.rightTxt}</p>
  </div>
}

export default Header