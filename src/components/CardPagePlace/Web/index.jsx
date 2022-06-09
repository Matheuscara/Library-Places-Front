import './style.css'
import mockUnitCategory from './Images/mockUnitCategory.png'
import mockMap from './Images/mockMap.png'

function CardPagePlaceWeb() {
  return (
    <div className="cardWeb">
      <img
        className="imgCardPagePlaceWeb"
        src={mockUnitCategory}
        alt={'teste'}
      />
      <div className="cardTextWeb">
        <p className="titleCardPagePlaceMobile">dsadasdsa</p>
        <p className="subtitleCardPagePlaceMobile">subtitle</p>
        <p className="descriptionCardPagePlaceMobile">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci nulla
          sagittis proin faucibus tincidunt. Eu ac feugiat turpis dolor pretium
          etiam id senectus arcu. Lacus, lorem lorem tristique facilisi
          tincidunt
        </p>

        <div className="tableCardPagePlaceMobile">
          <div className="elementTableCardPagePlaceMobile border">
            <p className="left">Telephone</p>
            <p className="left">Address</p>
          </div>
          <div className="elementTableCardPagePlaceMobile">
            <p className="rigth">9789931347125</p>
            <p className="rigth">
              109 Middle St, Portland, ME 04101, Estados Unidos
            </p>
          </div>
        </div>
        <img className="imgCardPagePlaceMobile" src={mockMap} alt="mockMap" />
      </div>
    </div>
  )
}

export default CardPagePlaceWeb
