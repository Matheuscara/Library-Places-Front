import './style.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../../../features/category/CategorySlice'
import validationCategory from '../../Util/validationCategories'
import { changeSelectCategory } from '../../../features/selectCategory/selectCategory'

function CategoryMobile() {
  const category = useSelector(selectCategory)
  const [stateCategory, setStateCategory] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeSelectCategory(stateCategory))
  }, [stateCategory])

  const ChangeSelectCategory = (e) => {
    const selected = e.target
    console.log(selected.className)

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
        <ul className="listUlCategories">
          {category.map((element, index) => {
            return validationCategory(element, index, ChangeSelectCategory)
          })}
        </ul>
      )}
      {/* */}
    </div>
  )
}

export default CategoryMobile
