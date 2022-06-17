import './style.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../../../features/category/CategorySlice'
import createGroupCategories from '../../Util/createGroupCategories'
import { changeSelectCategory } from '../../../features/selectCategory/selectCategory'

function CategoryMobile() {
  const category = useSelector(selectCategory)
  const [stateCategory, setStateCategory] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeSelectCategory(stateCategory || ''))
  }, [stateCategory])

  const ChangeSelectCategory = (e) => {
    const selected = e.target

    if (selected.className === 'desable') {
      if (document.querySelector('.selected'))
        document.querySelector('.selected').className = 'desable'
      selected.className = 'selected'
      setStateCategory(selected.getAttribute('value'))
    } else if (selected.className === 'selected') {
      setStateCategory('')
      selected.className = 'desable'
    }
  }

  return (
    <div>
      Categories
      {category && (
        <ul className="listUlCategoriesMobile">
          {createGroupCategories(category).Emergency.length > 0 && (
            <li
              key="Emergency"
              value="Emergency"
              onClick={(e) => ChangeSelectCategory(e)}
              className={'desable'}
            >
              Emergency
            </li>
          )}
          {createGroupCategories(category).Entertainment.length > 0 && (
            <li
              key="Entertainment"
              value="Entertainment"
              onClick={(e) => ChangeSelectCategory(e)}
              className={'desable'}
            >
              Entertainment
            </li>
          )}
          {createGroupCategories(category).Food.length > 0 && (
            <li
              key="Food"
              value="Food"
              onClick={(e) => ChangeSelectCategory(e)}
              className={'desable'}
            >
              Food
            </li>
          )}
          {createGroupCategories(category).Locomotion.length > 0 && (
            <li
              key="Locomotion"
              value="Locomotion"
              onClick={(e) => ChangeSelectCategory(e)}
              className={'desable'}
            >
              Locomotion
            </li>
          )}
        </ul>
      )}
      {/* */}
    </div>
  )
}

export default CategoryMobile
