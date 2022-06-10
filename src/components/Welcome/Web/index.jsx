import './style.css'
import WelcomeImage from './Images/WelcomeImage.png'

function WelcomeWeb() {
  return (
    <div className="WelcomeWeb">
      <div className="HelloWelcome">
        <p className="textSecondary">Hello 👋🏻</p>
        <p className="textWeb">here we can help you find what you want</p>
      </div>

      <img alt="Welcome" className="imgWeb" src={WelcomeImage} />
    </div>
  )
}

export default WelcomeWeb
