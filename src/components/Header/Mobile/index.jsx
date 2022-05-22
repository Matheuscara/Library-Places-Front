import TranslateIcon from './Images/TranslateIcon.png'
import './style.css'
import { HiArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function HeaderMobile({ beReturn, locationReturn }) {
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
          <img alt="Header" src={TranslateIcon} />
        </header>
      ) : (
        <header className="headerNotBeRerturn">
          <p className="Title">HelpGo</p>
          <img alt="Header" src={TranslateIcon} />
        </header>
      )}
    </div>
  )
}

export default HeaderMobile
