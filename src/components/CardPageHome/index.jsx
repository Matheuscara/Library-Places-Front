import { useState, useEffect, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import useWindowSize from '../Util/windowSize'
import CardHomePageMobile from './Mobile/index'
import CardHomePageWeb from './Web/index'
import testImage from './Mobile/Images/testImage.png'
import { getCategoriesById } from '../Util/restAxios'
import createGroupCategories from '../Util/createGroupCategories'
import { selectAdress } from '../../features/Input/InputSlice'
import { SelectCategory } from '../../features/selectCategory/selectCategory'

import './Mobile/style.css'
import Flip from 'react-reveal/Flip'

function CardHomePage() {
  const [Categories, setCategories] = useState([])
  const [CategoriesSelected, setCategoriesSelected] = useState([])

  const adress = useSelector(selectAdress)
  const selectCategoryRedux = useSelector(SelectCategory).SelectCategory.value

  const size = useWindowSize()

  async function RequestCategories(place) {
    return await getCategoriesById(place).then((res) => {
      setCategories(createGroupCategories(res))
    })
  }

  async function validSelectCategory(array) {
    if (selectCategoryRedux) {
      if (selectCategoryRedux === 'Locomotion') {
        setCategoriesSelected(array.Locomotion)
      } else if (selectCategoryRedux === 'Entertainment') {
        setCategoriesSelected(array.Entertainment)
      } else if (selectCategoryRedux === 'Emergency') {
        setCategoriesSelected(array.Emergency)
      } else if (selectCategoryRedux === 'Food') {
        setCategoriesSelected(array.Food)
      } else setCategoriesSelected(array.all)
    } else {
      setCategoriesSelected(array.all)
    }
  }

  useEffect(() => {
    try {
      if (adress.value.place_id) {
        RequestCategories(adress.value.place_id)
      }
    } catch (e) {}
  }, [adress])

  useEffect(() => {
    try {
      validSelectCategory(Categories)
    } catch (e) {}
  }, [Categories])

  useEffect(() => {
    try {
      validSelectCategory(Categories)
    } catch (e) {}
  }, [selectCategoryRedux])

  return (
    <div>
      {size.width < 800 ? (
        <div className="card-Home-Page-Container">
          {CategoriesSelected &&
            CategoriesSelected.map((element) => {
              return (
                <Flip left>
                  <CardHomePageMobile
                    img={testImage}
                    title={element.replaceAll('_', ' ')}
                    subtitle={selectCategoryRedux}
                  />
                </Flip>
              )
            })}
        </div>
      ) : (
        <div className="card-Home-Page-Container">
          {CategoriesSelected &&
            CategoriesSelected.map((element) => {
              return (
                <Flip left>
                  <CardHomePageWeb
                    img={element.image}
                    title={element.title}
                    subtitle={element.description}
                  />
                </Flip>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default CardHomePage
