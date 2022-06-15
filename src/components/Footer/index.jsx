import useWindowSize from '../Util/windowSize'
import FooterMobile from './Mobile/index'
import FooterWeb from './Web/index'

function Footer() {
  const size = useWindowSize()

  return <div>{size.width < 800 ? <FooterMobile /> : <FooterWeb />}</div>
}

export default Footer
