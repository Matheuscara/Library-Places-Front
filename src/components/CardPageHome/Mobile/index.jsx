import './style.css'
import testImage from './Images/testImage.png'
import { generatePath, useNavigate } from 'react-router-dom'

function CardHomePageMobile({ img, title, subtitle }) {
  const navigate = useNavigate()
  const logo = require(`../images/${img}.jpg`)

  const createPath = () => {
    const path = generatePath('/Category/:title', { title: title })
    navigate(path)
  }
  
  return (
    <div className="card-home">
      <img
        className="imgMobilePage"
        onClick={() => createPath()}
        src={logo}
        alt="testImage"
      />
      <div className="card-home-title">{title || 'teste'}</div>
      <div className="card-home-subtitle">{subtitle || '----'}</div>
    </div>
  )
}

export default CardHomePageMobile
