import useWindowSize from '../Util/windowSize'
import CardPagePlaceMobile from './Mobile/index'
import CardPagePlaceWeb from './Web/index'

import './Mobile/style.css'

function CardPagePlace() {
  const size = useWindowSize()

  return (
    <div>
      {size.width < 800 ? (
        <div>
          <CardPagePlaceMobile />
        </div>
      ) : (
        <CardPagePlaceWeb />
      )}
    </div>
  )
}

export default CardPagePlace
