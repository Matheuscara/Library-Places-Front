import useWindowSize from '../Util/windowSize'
import CardHomePageMobile from './Mobile/index'
import testImage from './Mobile/Images/testImage.png'
import './Mobile/style.css'

function CardHomePage() {
  const size = useWindowSize()
  const testeBuild = [
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
