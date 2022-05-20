import './style.css'
import testImage from './Images/testImage.png'
import Slide from 'react-reveal/Slide'

function CardHomePageMobile({ img, title, subtitle }) {
  return (
    <Slide right>
      <div className="card-home">
        <img className="card-home" src={img || testImage} alt="testImage" />
        <div className="card-home-title">{title || 'teste'}</div>
        <div className="card-home-subtitle">{subtitle || 'teste'}</div>
      </div>
    </Slide>
  )
}

export default CardHomePageMobile
