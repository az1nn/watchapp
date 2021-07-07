import { Header, MainMenu } from '../../molecules'
import { Clock } from '../../atoms'

const Main = () => {
  return <div className="appScreen">
    <Header title={<Clock />}/>
    <MainMenu />
  </div>
}

export default Main