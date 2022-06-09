import './style.css'
import testImage from './Images/testImage.png'
import { generatePath, useNavigate } from 'react-router-dom'

function CardHomePageWeb({ img, title, subtitle }) {
  const navigate = useNavigate()

  const createPath = () => {
    const path = generatePath('/Category/:title', { title: title })
    navigate(path)
  }
  
  return (
    <div className="card-home-web">
      <img
        className="card-home-web"
        onClick={() => createPath()}
        src={img || testImage}
        alt="testImage"
      />
      <div className="card-home-title-web">{title || 'teste'}</div>
      <div className="card-home-subtitle-web">{subtitle || 'teste'}</div>
    </div>
  )
}

export default CardHomePageWeb
