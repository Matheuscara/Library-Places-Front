import useWindowSize from '../Util/windowSize'
import WelcomeMobile from './Mobile/index'
import WelcomeWeb from './Web/index'

function Welcome() {
  const size = useWindowSize()

  return <div>{size.width < 800 ? <WelcomeMobile /> : <WelcomeWeb />}</div>
}

export default Welcome
