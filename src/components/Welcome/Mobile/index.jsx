import './style.css'
import WelcomeImage from './Images/WelcomeImage.png'

function WelcomeMobile() {
  return (
    <div className="title">
      <p className="textSecondary">Hello 👋🏻</p>
      <p>how can i help you?</p>
      <div className="Welcome">
        <img alt="Welcome" className="img" src={WelcomeImage} />
        <div class="topleftAbsolute">
          <p>Looking for a better</p>
          <p className="textSecondary">Future</p>
        </div>
      </div>
    </div>
  )
}

export default WelcomeMobile
