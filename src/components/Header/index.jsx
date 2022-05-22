import HeaderMobile from './Mobile/index'
import useWindowSize from '../Util/windowSize'

function Header({ beReturn, locationReturn }) {
  const size = useWindowSize()

  return (
    <div>
      {size.width < 500 ? (
        <HeaderMobile locationReturn={locationReturn} beReturn={beReturn} />
      ) : (
        <p>site</p>
      )}
    </div>
  )
}

export default Header
