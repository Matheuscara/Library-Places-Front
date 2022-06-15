function validationCategory(element, index, select, component) {
  if (
    element ===
    ('police',
    'pharmacy',
    'hospital',
    'doctor',
    'bank',
    'health',
    'drugstore',
    'political',
    'airport')
  ) {
    return (
      component || (
        <li
          key={index}
          value="Emergency"
          onClick={(e) => select(e)}
          className={'desable'}
        >
          Emergency
        </li>
      )
    )
  } else if (
    element === ('light_rail_station', 'airport', 'bus_station', 'locality')
  ) {
    return (
      component || (
        <li
          key={index}
          value="Locomotion"
          onClick={(e) => select(e)}
          className={'desable'}
        >
          Locomotion
        </li>
      )
    )
  } else if (
    element ===
    ('art_gallery',
    'aquarium',
    'amusement_park',
    'book_store',
    'casino',
    'movie_theater',
    'museum',
    'night_club',
    'park',
    'parking',
    'bar',
    'point_of_interest')
  ) {
    return (
      component || (
        <li
          key={index}
          value="Entertainment"
          onClick={(e) => select(e)}
          className={'desable'}
        >
          Entertainment
        </li>
      )
    )
  } else if (
    element ===
    ('bakery', 'cafe', 'liquor_store', 'home_goods_store', 'restaurant', 'food')
  ) {
    return (
      component || (
        <li
          key={index}
          value="Food"
          onClick={(e) => select(e)}
          className={'desable'}
        >
          Food
        </li>
      )
    )
  }
}

export default validationCategory
