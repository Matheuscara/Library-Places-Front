import HeaderMobile from './Mobile/index'
import useWindowSize from '../Util/windowSize'

function Header() {
  const size = useWindowSize()

  return (
    <div>
      {size.width < 500 ? <HeaderMobile /> : <p>site</p>}
    </div>
  )
}

export default Header