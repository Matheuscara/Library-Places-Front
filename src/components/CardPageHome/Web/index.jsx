import './style.css'
import { generatePath, useNavigate } from 'react-router-dom'

function CardHomePageWeb({ img, title, subtitle }) {
  const navigate = useNavigate()
  const logo = require(`../images/${img}.jpg`)

  const createPath = () => {
    const path = generatePath('/Category/:title', { title: title })
    navigate(path)
  }

  return (
    <div className="card-home-web">
      <img
        className="imgWebPage"
        onClick={() => createPath()}
        src={logo}
        alt="testImage"
      />

      <div className="card-home-title-web">{title || '---'}</div>
      <div className="card-home-subtitle-web">{subtitle || '---'}</div>
    </div>
  )
}

export default CardHomePageWeb
