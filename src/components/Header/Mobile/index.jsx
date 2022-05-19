import TranslateIcon from './Images/TranslateIcon.png'
import './style.css'

function HeaderMobile() {
  return (
    <header>
      <p className="Title">HelpGo</p>
      <img alt="Header" src={TranslateIcon} />
    </header>
  )
}

export default HeaderMobile
