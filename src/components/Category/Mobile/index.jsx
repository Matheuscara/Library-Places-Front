import './style.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCategory } from '../../../features/category/CategorySlice'
import { selectAdress } from '../../../features/Input/InputSlice'


function CategoryMobile() {
  const category = useSelector(selectCategory)

  return (
    <div>
      Categories
      <ul className="listUlCategories">
        {category ? (
          <ul className="listUlCategories">
            {category.map((element, index) => (
              <li className={index === 0 ? 'selected' : ''}>
                {element.replaceAll('_', ' ')}
              </li>
            ))}
          </ul>
        ) : (
          console.log(category)
        )}
        {/* <li className="selected">Emergency</li>

        <li>Amusement</li>
        <li>snack bars</li>
        <li>Amusement</li>
        <li>Amusement</li> */}
      </ul>
    </div>
  )
}

export default CategoryMobile
