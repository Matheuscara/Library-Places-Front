import useWindowSize from '../Util/windowSize'
import CardHomePageMobile from './Mobile/index'
import CardHomePageWeb from './Web/index'
import testImage from './Mobile/Images/testImage.png'
import testImage2 from './Web/Images/testImage.png'

import './Mobile/style.css'
import Flip from 'react-reveal/Flip'

function CardHomePage() {
  const size = useWindowSize()
  const testeBuild = [
    {
      image: testImage,
      title: 'Police',
      description: 'subtitle',
    },
    {
      image: testImage,
      title: 'Pharmacy',
      description: 'subtitle',
    },
    {
      image: testImage,
      title: 'Hospital',
      description: 'subtitle',
    },
    {
      image: testImage,
      title: 'Bank',
      description: 'subtitle',
    },
    {
      image: testImage,
      title: 'Airport',
      description: 'subtitle',
    },
    {
      image: testImage,
      title: 'Bus Station',
      description: 'subtitle',
    },
    {
      image: testImage,
      title: 'teste',
      description: 'subtitle',
    },
    {
      image: testImage,
      title: 'teste',
      description: 'subtitle',
    },
    {
      image: testImage,
      title: 'teste',
      description: 'subtitle',
    },
    {
      image: testImage,
      title: 'teste',
      description: 'subtitle',
    },
    {
      image: testImage,
      title: 'teste',
      description: 'subtitle',
    },
  ]

  const testeBuildWeb = [
    {
      image: testImage2,
      title: 'Police',
      description: 'subtitle',
    },
    {
      image: testImage2,
      title: 'Pharmacy',
      description: 'subtitle',
    },
    {
      image: testImage2,
      title: 'Hospital',
      description: 'subtitle',
    },
    {
      image: testImage2,
      title: 'Bank',
      description: 'subtitle',
    },
    {
      image: testImage2,
      title: 'Airport',
      description: 'subtitle',
    },
    {
      image: testImage2,
      title: 'Bus Station',
      description: 'subtitle',
    },
    {
      image: testImage2,
      title: 'teste',
      description: 'subtitle',
    },
    {
      image: testImage2,
      title: 'teste',
      description: 'subtitle',
    },
    {
      image: testImage2,
      title: 'teste',
      description: 'subtitle',
    },
    {
      image: testImage2,
      title: 'teste',
      description: 'subtitle',
    },
    {
      image: testImage2,
      title: 'teste',
      description: 'subtitle',
    },
  ]

  return (
    <div>
      {size.width < 800 ? (
        <div className="card-Home-Page-Container">
          {testeBuild.map((element) => {
            return (
              <Flip left>
                <CardHomePageMobile
                  img={element.image}
                  title={element.title}
                  description={element.description}
                />
              </Flip>
            )
          })}
        </div>
      ) : (
        <div className="card-Home-Page-Container">
          {testeBuildWeb.map((element) => {
            return (
              <Flip left>
                <CardHomePageWeb
                  img={element.image}
                  title={element.title}
                  description={element.description}
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
