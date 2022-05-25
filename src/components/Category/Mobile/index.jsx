import './style.css'
import { useSelector } from 'react-redux'
import { selectCategory } from '../../../features/category/CategorySlice'

function CategoryMobile() {
  const category = useSelector(selectCategory)

  return (
    <div>
      Categories
      <ul className="listUlCategories">
        <li className="selected">Emergency</li>
        <li>Locomotion</li>
        <li>Amusement</li>
        <li>snack bars</li>
        <li>Amusement</li>
        <li>Amusement</li>
      </ul>
    </div>
  )
}

export default CategoryMobile
