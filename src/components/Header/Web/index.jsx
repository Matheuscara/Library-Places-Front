import './style.css'
import { HiArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { RiTranslate } from 'react-icons/ri'

function HeaderWeb({ beReturn, locationReturn }) {
  const navigate = useNavigate()
  return (
    <div>
      {beReturn ? (
        <header className="headerBeRerturn">
          <HiArrowLeft
            size={25}
            onClick={() => navigate(locationReturn || '/')}
          />
          <p className="Title">HelpGo</p>
          <button className="headerButtom">Translate</button>
        </header>
      ) : (
        <header className="headerNotBeRerturn">
          <p className="Title">HelpGo</p>
          <button className="headerButtom">Translate</button>
        </header>
      )}
    </div>
  )
}

export default HeaderWeb
