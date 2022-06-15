import useWindowSize from '../Util/windowSize'
import SelectImputMobile from './Mobile/index'
import SelectImputWeb from './Web/index'

function SelectImput() {
  const size = useWindowSize()

  return <div>{size.width < 800 ? <SelectImputMobile /> : <SelectImputWeb />}</div>
}

export default SelectImput
