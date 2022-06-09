import './style.css'
import { useSelector } from 'react-redux'
import { selectCategory } from '../../../features/category/CategorySlice'

function CategoryWeb() {
  const category = useSelector(selectCategory)

  return (
    <div>
      <p className="category">Categories</p>
      {category ? (
        <ul className="listUlCategories">
          {category.map((element, index) => {
            console.log(element)
            if (
              element ===
              ('police',
              'pharmacy',
              'hospital',
              'doctor',
              'bank',
              'health',
              'drugstore',
              'political')
            ) {
              return (
                <li key={index} className={index === 0 ? 'selected' : ''}>
                  Emergency
                </li>
              )
            }

            if (
              element ===
              ('light_rail_station', 'airport', 'bus_station', 'locality')
            ) {
              return (
                <li key={index} className={index === 0 ? 'selected' : ''}>
                  Locomotion
                </li>
              )
            }

            if (
              element ===
              ('art_gallery',
              'aquarium',
              'amusement_park',
              'book_store',
              'casino',
              'movie_theater',
              'museum',
              'night_club',
              'park',
              'parking',
              'bar',
              'point_of_interest')
            ) {
              return (
                <li key={index} className={index === 0 ? 'selected' : ''}>
                  Entertainment
                </li>
              )
            }

            if (
              element ===
              ('bakery',
              'cafe',
              'liquor_store',
              'home_goods_store',
              'restaurant',
              'food')
            ) {
              return (
                <li key={index} className={index === 0 ? 'selected' : ''}>
                  Food
                </li>
              )
            }
          })}
        </ul>
      ) : (
        <ul className="listUlCategories">
          <li className="selected">Emergency</li>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </ul>
      )}
      {/* */}
    </div>
  )
}

export default CategoryWeb
