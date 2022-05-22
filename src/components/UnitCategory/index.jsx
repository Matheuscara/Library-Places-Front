import useWindowSize from '../Util/windowSize'
import UnitCategoryMobile from './Mobile/index'
import mockUnitCategory from './Mobile/Images/mockUnitCategory.png'
import mockUnitCategory2 from './Mobile/Images/mockUnitCategory2.png'
import mockUnitCategory3 from './Mobile/Images/mockUnitCategory3.png'

function UnitCategory() {
  const size = useWindowSize()
  
  const MockCategory = [
    {
      image: mockUnitCategory,
      title: 'Portland Police Bureau',
      subtitle: 'Emergency',
    },
    {
      image: mockUnitCategory2,
      title: 'Transit Police Department',
      subtitle: 'Emergency',
    },
    {
      image: mockUnitCategory3,
      title: 'Portland Police Bureau: North Precinct',
      subtitle: 'Emergency',
    },
  ]

  return (
    <div>
      {size.width < 500 ? (
        <div>
          {MockCategory.map((category) => {
            return (
              <UnitCategoryMobile
                image={category.image}
                titleElement={category.title}
                subtitle={category.subtitle}
              />
            )
          })}
        </div>
      ) : (
        <p>site</p>
      )}
    </div>
  )
}

export default UnitCategory
