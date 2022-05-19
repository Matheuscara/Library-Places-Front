import useWindowSize from '../Util/windowSize'
import InputMobile from './Mobile/index'

function Input() {
  const size = useWindowSize()

  return <div>{size.width < 500 ? <InputMobile /> : <p>site</p>}</div>
}

export default Input