import './style.css'
import { useParams, useNavigate, generatePath } from 'react-router-dom'

function UnitCategoryWeb({ image, titleElement, subtitle }) {
  const { title } = useParams()
  const navigate = useNavigate()

  const createPath = () => {
    const path = generatePath('/Category/:title/:id', { title: title, id: Math.random() })
    navigate(path)
  }

  return (
    <div className="UnitCategoryWeb" onClick={() => createPath()}>
      <img className="imageUnitCategoryWeb" src={image} alt={title} />
      <p className="titleUnitCategoryWeb">{titleElement}</p>
      <div className="subtitleUnitCategoryWeb">{subtitle}</div>
    </div>
  )
}

export default UnitCategoryWeb
