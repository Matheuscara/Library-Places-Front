import useWindowSize from '../Util/windowSize'
import CardPagePlaceMobile from './Mobile/index'
import './Mobile/style.css'

function CardPagePlace() {
  const size = useWindowSize()

  return (
    <div>
      {size.width < 500 ? (
        <div>
          <CardPagePlaceMobile />
        </div>
      ) : (
        <p>site</p>
      )}
    </div>
  )
}

export default CardPagePlace
