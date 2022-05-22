import './style.css'
import { useParams, useNavigate, generatePath } from 'react-router-dom'

function UnitCategoryMobile({ image, titleElement, subtitle }) {
  const { title } = useParams()
  const navigate = useNavigate()

  const createPath = () => {
    const path = generatePath('/Category/:title/:id', { title: title, id: Math.random() })
    navigate(path)
  }

  return (
    <div onClick={() => createPath()}>
      <img className="imageUnitCategoryMobile" src={image} alt={title} />
      <p className="titleUnitCategoryMobile">{titleElement}</p>
      <div className="subtitleUnitCategoryMobile">{subtitle}</div>
    </div>
  )
}

export default UnitCategoryMobile
