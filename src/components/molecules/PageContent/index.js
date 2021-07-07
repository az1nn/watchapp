import { HourClock, FooterAtom } from "../../atoms";

const PageCont = () => {
  const date = new Date()
  const day = date.toLocaleDateString("en", { weekday: 'long' })
  
  return <div className="pageCont">
    <div className="containerClock">
      <div className="clockCircle">
      <HourClock />
      </div>
    </div>
    <div className="containerFooter">
      <FooterAtom footer={day}/>
    </div>
  </div>
}

export default PageCont

