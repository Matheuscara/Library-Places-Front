import './style.css'
import WelcomeImage from './Images/WelcomeImage.png'

function WelcomeMobile() {
  return (
    <div className="Welcome">
      <img className="img" src={WelcomeImage} />
      <div class="topleftAbsolute">
        <p>Looking for a better</p>
        <p className="textSecondary">Future</p>
      </div>
    </div>
  )
}

export default WelcomeMobile
