import useWindowSize from '../Util/windowSize'
import CategoryMobile from './Mobile/index'
import { useSelector, useDispatch } from 'react-redux'
import { selectAdress } from '../../features/Input/InputSlice'
import { getCategoriesApi } from '../../features/category/CategorySlice'

import { useEffect } from 'react'
import { getAdressById } from '../Util/restAxios'
import React, { useState } from 'react'

function Category() {
  const dispatch = useDispatch()
  const adress = useSelector(selectAdress)

  const [dressIdState, setDressIdState] = useState([])

  async function RequestAdressId(place) {
    return await getAdressById(place).then((res) => {
      setDressIdState(res)
    })
  }

  useEffect(() => {
    try {
      if (adress.value.place_id) {
        RequestAdressId(adress.value.place_id)
      }
    } catch (e) {}
  }, [adress])

  useEffect(() => {
    try {
      if (dressIdState.location) {
        dispatch(getCategoriesApi(dressIdState.location))
      }
    } catch (e) {}
  }, [dressIdState])

  const size = useWindowSize()

  return <div>{size.width < 500 ? <CategoryMobile /> : <p>dressId</p>}</div>
}

export default Category
