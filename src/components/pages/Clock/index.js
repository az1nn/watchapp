import { Header, PageCont} from '../../molecules'
import BackIcon from '../../../assets/image/back_icon.png'

const Clock = () => {
  const date = new Date()
  const month = date.toLocaleString('en', { month: 'long' })
  const day = date.getDate()

  return <div className="appScreen">
    <Header icon={BackIcon} title={month + ", " + day}/>
    <PageCont />
  </div>
}

export default Clock