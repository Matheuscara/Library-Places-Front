import HeaderMobile from './Mobile/index'
import HeaderWeb from './Web/index'
import useWindowSize from '../Util/windowSize'

function Header({ beReturn, locationReturn }) {
  const size = useWindowSize()

  return (
    <div>
      {size.width < 800 ? (
        <HeaderMobile locationReturn={locationReturn} beReturn={beReturn} />
      ) : (
        <HeaderWeb locationReturn={locationReturn} beReturn={beReturn} />
      )}
    </div>
  )
}

export default Header
