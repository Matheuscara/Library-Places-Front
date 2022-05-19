import useWindowSize from '../Util/windowSize'
import CategoryMobile from './Mobile/index'

function Category() {
  const size = useWindowSize()

  return <div>{size.width < 500 ? <CategoryMobile /> : <p>site</p>}</div>
}

export default Category