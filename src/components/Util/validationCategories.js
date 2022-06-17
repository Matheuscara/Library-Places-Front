function validationCategory(element) {
  if (
    [
      'police',
      'pharmacy',
      'hospital',
      'doctor',
      'bank',
      'health',
      'drugstore',
      'political',
      'airport',
    ].find((category) => category === element)
  ) {
    return 'Emergency'
  } else if (
    ['light_rail_station', 'bus_station', 'locality'].find(
      (category) => category === element
    )
  ) {
    return 'Locomotion'
  } else if (
    [
      'art_gallery',
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
      'point_of_interest',
      'night_club',
      'store',
      'establishment',
    ].find((category) => category === element)
  ) {
    return 'Entertainment'
  } else if (
    [
      'bakery',
      'cafe',
      'liquor_store',
      'home_goods_store',
      'restaurant',
      'food',
    ].find((category) => category === element)
  ) {
    return 'Food'
  }
}

export default validationCategory
