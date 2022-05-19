import useWindowSize from '../Util/windowSize'
import WelcomeMobile from './Mobile/index'

function Welcome() {
  const size = useWindowSize()

  return <div>{size.width < 500 ? <WelcomeMobile /> : <p>site</p>}</div>
}

export default Welcome