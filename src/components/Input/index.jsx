import useWindowSize from '../Util/windowSize'
import InputMobile from './Mobile/index'
import InputWeb from './Web/index'

function Input() {
  const size = useWindowSize()

  return <div>{size.width < 800 ? <InputMobile /> : <InputWeb />}</div>
}

export default Input
