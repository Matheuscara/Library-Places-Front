import './style.css'
import { HiArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { RiTranslate } from 'react-icons/ri'

function HeaderWeb({ beReturn, locationReturn }) {
  const navigate = useNavigate()
  return (
    <div className="headerWeb">
      {beReturn ? (
        <header className="headerBeRerturn">
          <span className="spanSvg">
            <HiArrowLeft
              size={25}
              onClick={() => navigate(locationReturn || '/')}
            />
          </span>

          <p className="TitleWeb">HelpGo</p>
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
