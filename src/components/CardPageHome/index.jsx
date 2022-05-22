import useWindowSize from '../Util/windowSize'
import CardHomePageMobile from './Mobile/index'
import testImage from './Mobile/Images/testImage.png'
import './Mobile/style.css'

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

  return (
    <div>
      {size.width < 500 ? (
        <div className="card-Home-Page-Container">
            {testeBuild.map((element) => {
              return (
                <CardHomePageMobile
                  img={element.image}
                  title={element.title}
                  description={element.description}
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

export default CardHomePage
